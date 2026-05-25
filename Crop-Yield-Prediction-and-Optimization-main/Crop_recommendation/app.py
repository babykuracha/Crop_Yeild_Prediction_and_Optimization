import streamlit as st
import pandas as pd
import pickle
import numpy as np

# Full crop list
all_crops = [
    "rice", "maize", "chickpea", "kidneybeans", "pigeonpeas", "mothbeans",
    "mungbean", "blackgram", "lentil", "pomegranate", "banana", "mango",
    "grapes", "watermelon", "muskmelon", "apple", "orange", "papaya",
    "coconut", "cotton", "jute", "coffee"
]

# Load your trained model and scaler
encoder = pickle.load(open("C:/project-crop/Crop_recommendation/models/encoder.pkl", 'rb'))
scaler = pickle.load(open("C:/project-crop/Crop_recommendation/models/scaler.pkl", 'rb'))
model_gbc = pickle.load(open("C:/project-crop/Crop_recommendation/models/model_gbc.pkl", 'rb'))

# Streamlit styling
st.markdown("""
<style>
[data-testid="stAppViewContainer"] {
    background: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
                url("https://e1.pxfuel.com/desktop-wallpaper/571/721/desktop-wallpaper-green-field-spring-ultra-backgrounds-agriculture.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    font-family: 'Segoe UI', sans-serif;
}
h1,h2,h3,h4,h5,h6 { color: #000000 !important; text-align: center; font-weight: bold; }
label { font-size: 15px !important; color: black !important; font-weight: 600 !important; }
div[data-baseweb="input"] { border-radius: 10px; border: 2px solid #16a085; box-shadow: 0px 2px 6px rgba(0,0,0,0.1); }
div.stButton > button { background: linear-gradient(90deg, #16a085, #1abc9c); color: white; border: none; border-radius: 12px; padding: 12px 30px; font-size: 16px; font-weight: bold; box-shadow: 0px 4px 6px rgba(0,0,0,0.2); transition: 0.3s; }
div.stButton > button:hover { background: linear-gradient(90deg, #1abc9c, #16a085); transform: scale(1.05); }
table { width: 80% !important; margin: auto !important; border-collapse: collapse !important; background-color: rgba(0,0,0,0.6) !important; color: white !important; }
table, th, td { border: 1px solid white !important; padding: 10px !important; text-align: center !important; }
th { background-color: rgba(0,0,0,0.8) !important; font-weight: bold !important; color: white !important; }
</style>
""", unsafe_allow_html=True)


# Hybrid top 3 function: combines ML probabilities with cycling through all crops
def hybrid_top3(N, P, K, temperature, humidity, ph, rainfall, top_n=3):
    # Prepare input
    input_df = pd.DataFrame([[N, P, K, temperature, humidity, ph, rainfall]],
                            columns=['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'])
    input_scaled = scaler.transform(input_df)

    # Get model probabilities
    probs = model_gbc.predict_proba(input_scaled)[0]
    crop_probs = {crop: probs[i] for i, crop in enumerate(encoder.classes_)}

    # Add missing crops with 0 probability
    for crop in all_crops:
        if crop not in crop_probs:
            crop_probs[crop] = 0.0

    # Add tiny noise to prevent repetition
    for crop in crop_probs:
        crop_probs[crop] += np.random.uniform(0, 1e-5)

    # Sort by probability
    sorted_crops = sorted(crop_probs.items(), key=lambda x: x[1], reverse=True)

    # Pick top N; if probabilities are zero for all, cycle through all_crops
    top3 = []
    for crop, prob in sorted_crops:
        if len(top3) < top_n:
            top3.append((crop, round(prob * 100, 2)))

    # Ensure exactly top_n crops
    if len(top3) < top_n:
        remaining = [c for c in all_crops if c not in [t[0] for t in top3]]
        for c in remaining[:top_n - len(top3)]:
            top3.append((c, 0.0))

    return top3


# Streamlit UI
st.title("🌱 Crop Recommendation System")
st.markdown("#### Enter soil and environmental parameters:")

col1, col2 = st.columns(2)
with col1:
    N = st.number_input("Nitrogen (N)", min_value=0.0, value=50.0)
    P = st.number_input("Phosphorous (P)", min_value=0.0, value=50.0)
    K = st.number_input("Potassium (K)", min_value=0.0, value=50.0)
    ph = st.number_input("Soil pH", min_value=0.0, max_value=14.0, value=6.5)
with col2:
    temperature = st.number_input("Temperature (°C)", min_value=-10.0, value=25.0)
    humidity = st.number_input("Humidity (%)", min_value=0.0, value=80.0)
    rainfall = st.number_input("Rainfall (mm)", min_value=0.0, value=100.0)

if st.button("🌱 Recommend"):
    results = hybrid_top3(N, P, K, temperature, humidity, ph, rainfall)
    df_results = pd.DataFrame(results, columns=["Crop", "Suitability (%)"])
    st.subheader("🌱 Top 3 Recommended Crops")
    st.table(df_results)
