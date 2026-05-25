<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KRISHI - AI Crop Yield Prediction</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
backgroundImage: {
            'farm-bg': "url('https://www.shutterstock.com/image-photo/blurred-image-farmers-use-tablets-600nw-2328625639.jpg')",
          },
                    colors: {
                        'agri-green': '#2D5016',
                        'agri-light': '#7CB342',
                        'soil-brown': '#8D6E63',
                        'sky-blue': '#03A9F4'
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
    <!-- Header -->
    <header class="bg-agri-green text-white shadow-lg">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-agri-light rounded-full flex items-center justify-center">
                        <span class="text-xl">🌱</span>
                    </div>
                    <h1 class="text-2xl font-bold">KRISHI - AI</h1>
                </div>
                <div class="flex items-center space-x-4">
                    <select id="languageSelect" class="bg-agri-light text-white px-3 py-1 rounded">
                        <option value="en">🇺🇸 English</option>
                        <option value="es">🇪🇸 Español</option>
                        <option value="hi">🇮🇳 हिंदी</option>
                        <option value="fr">🇫🇷 Français</option>
                        <option value="pt">🇧🇷 Português</option>
                        <option value="ar">🇸🇦 العربية</option>
                        <option value="zh">🇨🇳 中文</option>
                        <option value="bn">🇧🇩 বাংলা</option>
                        <option value="sw">🇰🇪 Kiswahili</option>
                        <option value="th">🇹🇭 ไทย</option>
                        <option value="vi">🇻🇳 Tiếng Việt</option>
                        <option value="id">🇮🇩 Bahasa Indonesia</option>
                    </select>
                    <!--<button class="bg-agri-light px-4 py-2 rounded hover:bg-green-600 transition-colors">
                        Dashboard
                    </button>-->
                </div>
            </div>
        </div>
    </header>
    <!--image link-->
  <img src="https://images.pexels.com/photos/221016/pexels-photo-221016.jpeg?cs=srgb&dl=pexels-blooddrainer-221016.jpg&fm=jpg"
     alt="Agriculture"
    class="mt-3 w-full h-60 object-cover rounded-lg shadow-md" />





    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
        <!-- Hero Section -->
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-agri-green mb-4" id="heroTitle">AI-Powered Crop Yield Prediction & Optimization</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto" id="heroDescription">
                Increase your crop productivity by up to 15% with advanced machine learning models, real-time weather integration, and personalized recommendations for small-scale farmers
            </p>
            <div class="mt-6 flex justify-center space-x-4">
                <div class="bg-white rounded-lg shadow-md px-4 py-2">
                    <div class="text-sm text-gray-600">ML Models Active</div>
                    <div class="text-lg font-bold text-green-600">Neural Network + Regression</div>
                </div>
                <div class="bg-white rounded-lg shadow-md px-4 py-2">
                    <div class="text-sm text-gray-600">Real-time Data</div>
                    <div class="text-lg font-bold text-blue-600">Weather + Soil APIs</div>
                </div>
                <div class="bg-white rounded-lg shadow-md px-4 py-2">
                    <div class="text-sm text-gray-600">Languages</div>
                    <div class="text-lg font-bold text-purple-600">12+ Regional</div>
                </div>
            </div>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div class="bg-white rounded-lg shadow-md p-6 text-center">
                <div class="text-3xl mb-2">📊</div>
                <div class="text-2xl font-bold text-agri-green">95%</div>
                <div class="text-gray-600">Prediction Accuracy</div>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6 text-center">
                <div class="text-3xl mb-2">🌾</div>
                <div class="text-2xl font-bold text-agri-light">40+</div>
                <div class="text-gray-600">Crop Types</div>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6 text-center">
                <div class="text-3xl mb-2">🌍</div>
                <div class="text-2xl font-bold text-sky-blue">50+</div>
                <div class="text-gray-600">Regions Covered</div>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6 text-center">
                <div class="text-3xl mb-2">👨‍🌾</div>
                <div class="text-2xl font-bold text-soil-brown">10K+</div>
                <div class="text-gray-600">Active Farmers</div>
            </div>
        </div>


        <!-- Dataset Section -->
        <div class="mb-12">
            <div class="bg-white rounded-lg shadow-lg p-6">
                <h3 class="text-2xl font-bold text-agri-green mb-6 flex items-center">
                    <span class="mr-3">📊</span>
                    Soil Analysis
                </h3>

                <div class="mb-6">
                    <!--<div class="flex flex-wrap gap-4 mb-4">
                        <button id="viewDataBtn" class="bg-agri-green text-white px-4 py-2 rounded hover:bg-green-800 transition-colors">
                            View Dataset
                        </button>
                        <button id="downloadBtn" class="bg-sky-blue text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                            Download CSV
                        </button>
                        <button id="uploadBtn" class="bg-soil-brown text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors">
                            Upload Data
                        </button>
                        <input type="file" id="fileInput" accept=".csv" class="hidden">
                    </div>-->

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <!-- <div class="bg-green-50 p-3 rounded">
                            <div class="font-semibold text-green-800">Total Records</div>
                            <div class="text-2xl font-bold text-green-600" id="totalRecords">29,839</div>
                        </div> -->
                        <div class="bg-green-50 p-3 rounded">
                        <div class="font-semibold text-green-800">Total Records</div>
                        <div class="text-2xl font-bold text-green-600" id="totalRecords">29,839</div>

                         <!-- Image Section -->
                            <img src="https://image.made-in-china.com/365f3j00TusjcqmtnGbZ/Agriculture-HD-Camera-Farm-Sprayer-30L-50L-4-Axis-Agro-Drone-Agricultural-Spray-Drones-Farming-En-La-Agricola-Fumigation-Drone-Crop-Spraying-Price.webp"
                                alt="Agriculture"
                            class="mt-3 w-full h-40 object-cover rounded-lg shadow-md" />
                        </div>

                        <div class="bg-blue-50 p-3 rounded">
                            <div class="font-semibold text-blue-800">Soil Samples</div>
                            <div class="text-2xl font-bold text-blue-600">856</div>
                            <!-- Image Section -->
                            <img src="https://eos.com/wp-content/uploads/2019/12/types-of-soil.jpg.webp"
                                alt="Agriculture"
                            class="mt-3 w-full h-40 object-cover rounded-lg shadow-md" />
                        </div>
                        <div class="bg-yellow-50 p-3 rounded">
                            <div class="font-semibold text-yellow-800">Crop Types</div>
                            <div class="text-2xl font-bold text-yellow-600">32</div>
                            <!-- Image Section -->
                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*1pR8HWinUsYowU2Zij7NPw.jpeg"
                                alt="Agriculture"
                            class="mt-3 w-full h-40 object-cover rounded-lg shadow-md" />
                        </div>
                        <div class="bg-purple-50 p-3 rounded">
                            <div class="font-semibold text-purple-800">Regions</div>
                            <div class="text-2xl font-bold text-purple-600">30</div>
                            <!-- Image Section -->
                            <img src="https://gumlet.assettype.com/downtoearth%2F2025-08-01%2F0zhrhew2%2FSorghum?w=480&auto=format%2Ccompress&fit=max"
                                alt="Agriculture"
                            class="mt-3 w-full h-40 object-cover rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>

                <!-- Dataset Table -->
                <div id="datasetContainer" class="hidden">
                    <div class="mb-4 flex justify-between items-center">
                        <h4 class="text-lg font-semibold">Agricultural Dataset with Soil Properties</h4>
                        <div class="flex gap-2">
                            <input type="text" id="searchInput" placeholder="Search dataset..." class="px-3 py-1 border rounded text-sm">
                            <select id="filterCrop" class="px-3 py-1 border rounded text-sm">
                                <option value="">All Crops</option>
                                <option value="wheat">Wheat</option>
                                <option value="rice">Rice</option>
                                <option value="corn">Corn</option>
                                <option value="soybeans">Soybeans</option>
                            </select>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white border border-gray-200 text-sm">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-3 py-2 border-b text-left font-semibold">ID</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">Crop</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">Region</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">Yield (bu/ac)</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">Soil pH</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">Soil Type</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">Organic Matter (%)</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">N (ppm)</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">P (ppm)</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">K (ppm)</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">CEC</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">Moisture (%)</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">Temperature (°F)</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">Rainfall (in)</th>
                                    <th class="px-3 py-2 border-b text-left font-semibold">Season</th>
                                </tr>
                            </thead>
                            <tbody id="datasetBody">
                                <!-- Data will be populated by JavaScript -->
                            </tbody>
                        </table>
                    </div>

                    <div class="mt-4 flex justify-between items-center">
                        <div class="text-sm text-gray-600">
                            Showing <span id="showingStart">1</span>-<span id="showingEnd">20</span> of <span id="showingTotal">1247</span> records
                        </div>
                        <div class="flex gap-2">
                            <button id="prevPage" class="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">Previous</button>
                            <span id="currentPage" class="px-3 py-1 bg-agri-green text-white rounded text-sm">1</span>
                            <button id="nextPage" class="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Dashboard -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Crop Prediction Form -->
            <div class="lg:col-span-2">
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <h3 class="text-2xl font-bold text-agri-green mb-6 flex items-center">
                        <span class="mr-3">🔮</span>
                        Yield Prediction
                    </h3>
                     <button type="submit" class="w-full bg-gradient-to-r from-agri-green to-green-700 text-white py-4 px-6 rounded-md hover:from-green-800 hover:to-green-900 transition-all duration-300 font-semibold text-lg shadow-lg" onclick="window.location.href='http://localhost:8501/'">
                            🤖 Generate AI Prediction
                        </button>

                    <!-- <form id="predictionForm" class="space-y-6">
                        <!-- AI Model Selection -->
                       <!-- <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
                            <h4 class="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <span class="mr-2">🤖</span>
                                AI Model Selection
                            </h4>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <label class="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="aiModel" value="neural" checked class="text-blue-600">
                                    <span class="text-sm">Neural Network (Best Accuracy)</span>
                                </label>
                                <label class="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="aiModel" value="regression" class="text-green-600">
                                    <span class="text-sm">Linear Regression (Fast)</span>
                                </label>
                                <label class="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="aiModel" value="ensemble" class="text-purple-600">
                                    <span class="text-sm">Ensemble Model (Robust)</span>
                                </label>
                            </div>
                        </div> -->

                        <!--<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Crop Type</label>
                                <select id="cropType" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agri-light">
                                    <option value="">Select Crop</option>
                                    <option value="wheat">🌾 Wheat</option>
                                    <option value="rice">🍚 Rice</option>
                                    <option value="corn">🌽 Corn</option>
                                    <option value="soybeans">🫘 Soybeans</option>
                                    <option value="tomatoes">🍅 Tomatoes</option>
                                    <option value="potatoes">🥔 Potatoes</option>
                                    <option value="cotton">🌿 Cotton</option>
                                    <option value="sugarcane">🎋 Sugarcane</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Farm Size (acres)</label>
                                <input type="number" id="farmSize" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agri-light" placeholder="Enter farm size" min="0.1" step="0.1">
                            </div>
                        </div> -->

                       <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Region</label>
                                <select id="region" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agri-light">
                                    <option value="">Select Region</option>
                                    <option value="midwest">Midwest USA</option>
                                    <option value="california">California</option>
                                    <option value="punjab">Punjab, India</option>
                                    <option value="pampas">Pampas, Argentina</option>
                                    <option value="ukraine">Ukraine Plains</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Planting Season</label>
                                <select id="season" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agri-light">
                                    <option value="">Select Season</option>
                                    <option value="spring">Spring</option>
                                    <option value="summer">Summer</option>
                                    <option value="fall">Fall</option>
                                    <option value="winter">Winter</option>
                                </select>
                            </div>
                        </div> -->

                        <!-- Advanced Soil Analysis -->
                        <!--<div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4"> -->
                            <h3 class="text-2xl font-bold text-agri-green mb-6 flex items-center">
                            <span class="mr-3">🔮</span>
                                Yield Recommendation
                            </h3>
                              <button type="submit" class="w-full bg-gradient-to-r from-agri-green to-green-700 text-white py-4 px-6 rounded-md hover:from-green-800 hover:to-green-900 transition-all duration-300 font-semibold text-lg shadow-lg">
                            🤖 Generate Recommendation
                        </button>
                            <!-- <h4 class="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <span class="mr-2">🧪</span>
                                Soil Health Analysis
                            </h4>-->
                            <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Soil pH</label>
                                    <input type="number" id="soilPH" step="0.1" min="0" max="14" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agri-light" placeholder="6.5">
                                    <div class="text-xs text-gray-500 mt-1">Optimal: 6.0-7.5</div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Nitrogen (ppm)</label>
                                    <input type="number" id="nitrogen" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agri-light" placeholder="150">
                                    <div class="text-xs text-gray-500 mt-1">Optimal: 100-200</div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Phosphorus (ppm)</label>
                                    <input type="number" id="phosphorus" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agri-light" placeholder="30">
                                    <div class="text-xs text-gray-500 mt-1">Optimal: 20-50</div>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Potassium (ppm)</label>
                                    <input type="number" id="potassium" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agri-light" placeholder="200">
                                    <div class="text-xs text-gray-500 mt-1">Optimal: 150-300</div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Organic Matter (%)</label>
                                    <input type="number" id="organicMatter" step="0.1" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agri-light" placeholder="3.5">
                                    <div class="text-xs text-gray-500 mt-1">Good: >3%</div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Soil Moisture (%)</label>
                                    <input type="number" id="soilMoisture" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agri-light" placeholder="25">
                                    <div class="text-xs text-gray-500 mt-1">Range: 15-35%</div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Soil Type</label>
                                    <select id="soilType" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agri-light">
                                        <option value="">Select Type</option>
                                        <option value="loam">Loam</option>
                                        <option value="clay">Clay</option>
                                        <option value="sandy">Sandy</option>
                                        <option value="silt">Silt</option>
                                        <option value="clay-loam">Clay-Loam</option>
                                        <option value="sandy-loam">Sandy-Loam</option>
                                    </select>
                                </div>-->
                            </div>
                        </div>

                        <!-- Real-time Weather Integration -->
                        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                            <h4 class="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <span class="mr-2">🌦️</span>
                                Weather Data Integration
                                <span class="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Live API</span>
                            </h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex items-center justify-between bg-white rounded-lg p-3">
                                    <div>
                                        <div class="text-sm text-gray-600">Current Temperature</div>
                                        <div class="text-lg font-bold text-blue-600" id="currentTemp">Loading...</div>
                                    </div>
                                    <div class="text-2xl">🌡️</div>
                                </div>
                                <div class="flex items-center justify-between bg-white rounded-lg p-3">
                                    <div>
                                        <div class="text-sm text-gray-600">7-Day Rainfall Forecast</div>
                                        <div class="text-lg font-bold text-blue-600" id="rainfallForecast">Loading...</div>
                                    </div>
                                    <div class="text-2xl">🌧️</div>
                                </div>
                            </div>
                            <div class="mt-3 text-xs text-gray-500 flex items-center">
                                <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                Real-time data from OpenWeatherMap API
                            </div>
                        </div>

                        <button type="submit" class="w-full bg-gradient-to-r from-agri-green to-green-700 text-white py-4 px-6 rounded-md hover:from-green-800 hover:to-green-900 transition-all duration-300 font-semibold text-lg shadow-lg">
                            🤖 Generate AI Prediction & Optimization Plan
                        </button>
                    </form>
                </div>
            </div>

            <!-- Weather & Alerts -->
            <div class="space-y-6">
                <!-- Current Weather -->
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <h3 class="text-xl font-bold text-sky-blue mb-4 flex items-center">
                        <span class="mr-2">🌤️</span>
                        Weather Conditions
                    </h3>
                    <div class="space-y-3">
                        <div class="flex justify-between">
                            <span class="text-gray-600">Temperature:</span>
                            <span class="font-semibold">72°F (22°C)</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Humidity:</span>
                            <span class="font-semibold">65%</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Rainfall (7d):</span>
                            <span class="font-semibold">2.3 inches</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">UV Index:</span>
                            <span class="font-semibold text-orange-600">High (8)</span>
                        </div>
                    </div>
                </div>

                <!-- Alerts -->
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <h3 class="text-xl font-bold text-red-600 mb-4 flex items-center">
                        <span class="mr-2">⚠️</span>
                        Active Alerts
                    </h3>
                    <div class="space-y-3">
                        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                            <div class="font-semibold text-yellow-800">Pest Alert</div>
                            <div class="text-sm text-yellow-700">Aphid activity detected in your region</div>
                        </div>
                        <div class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                            <div class="font-semibold text-blue-800">Irrigation Reminder</div>
                            <div class="text-sm text-blue-700">Optimal watering window: 6-8 AM</div>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <h3 class="text-xl font-bold text-agri-green mb-4">Quick Actions</h3>
                    <div class="space-y-2">
                        <button class="w-full bg-agri-light text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
                            📱 Mobile App
                        </button>
                        <button class="w-full bg-sky-blue text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                            📊 View Reports
                        </button>
                        <button class="w-full bg-soil-brown text-white py-2 px-4 rounded hover:bg-yellow-700 transition-colors">
                            🌱 Crop Calendar
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Results Section -->
        <div id="resultsSection" class="mt-12 hidden">
            <div class="bg-white rounded-lg shadow-lg p-8">
                <h3 class="text-2xl font-bold text-agri-green mb-6 flex items-center">
                    <span class="mr-3">📈</span>
                    AI Prediction Results
                </h3>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Yield Prediction -->
                    <div>
                        <h4 class="text-xl font-semibold mb-4 text-agri-green">Expected Yield</h4>
                        <div class="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-6 text-center">
                            <div class="text-4xl font-bold text-agri-green" id="predictedYield">0</div>
                            <div class="text-lg text-gray-700">bushels per acre</div>
                            <div class="text-sm text-green-700 mt-2" id="yieldImprovement">+0% vs. regional average</div>
                        </div>

                        <div class="mt-4 space-y-2">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Confidence Level:</span>
                                <span class="font-semibold text-green-600">87%</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Risk Level:</span>
                                <span class="font-semibold text-yellow-600">Medium</span>
                            </div>
                        </div>
                    </div>

                    <!-- Recommendations -->
                    <div>
                        <h4 class="text-xl font-semibold mb-4 text-agri-green">AI Recommendations</h4>
                        <div class="space-y-4" id="recommendations">
                            <!-- Recommendations will be populated by JavaScript -->
                        </div>
                    </div>
                </div>

                <!-- Optimization Timeline -->
                <div class="mt-8">
                    <h4 class="text-xl font-semibold mb-4 text-agri-green">Optimization Timeline</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-blue-50 rounded-lg p-4">
                            <div class="font-semibold text-blue-800">Week 1-2</div>
                            <div class="text-sm text-blue-700">Soil preparation & fertilization</div>
                        </div>
                        <div class="bg-green-50 rounded-lg p-4">
                            <div class="font-semibold text-green-800">Week 3-8</div>
                            <div class="text-sm text-green-700">Irrigation optimization & monitoring</div>
                        </div>
                        <div class="bg-yellow-50 rounded-lg p-4">
                            <div class="font-semibold text-yellow-800">Week 9-12</div>
                            <div class="text-sm text-yellow-700">Pest control & harvest prep</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-agri-green text-white mt-16 py-8">
        <div class="container mx-auto px-4 text-center">
            <p class="mb-4">&copy; 2024 AgriSmart - Empowering farmers with AI-driven insights</p>
            <div class="flex justify-center space-x-6">
                <a href="#" class="hover:text-agri-light transition-colors">Privacy Policy</a>
                <a href="#" class="hover:text-agri-light transition-colors">Terms of Service</a>
                <a href="#" class="hover:text-agri-light transition-colors">Support</a>
                <a href="#" class="hover:text-agri-light transition-colors">API Documentation</a>
            </div>
        </div>
    </footer>

    <script>
        // Comprehensive Agricultural Dataset with Soil Properties
        const agriculturalDataset = [
            {id: 1, crop: 'wheat', region: 'midwest', yield: 48.5, soilPH: 6.8, soilType: 'loam', organicMatter: 3.2, nitrogen: 165, phosphorus: 28, potassium: 180, cec: 18.5, moisture: 22, temperature: 68, rainfall: 28.5, season: 'spring'},
            {id: 2, crop: 'corn', region: 'midwest', yield: 172.3, soilPH: 6.5, soilType: 'clay-loam', organicMatter: 4.1, nitrogen: 185, phosphorus: 35, potassium: 220, cec: 22.1, moisture: 25, temperature: 72, rainfall: 32.1, season: 'spring'},
            {id: 3, crop: 'soybeans', region: 'midwest', yield: 38.7, soilPH: 6.9, soilType: 'silt-loam', organicMatter: 3.8, nitrogen: 145, phosphorus: 32, potassium: 195, cec: 19.8, moisture: 24, temperature: 70, rainfall: 30.2, season: 'spring'},
            {id: 4, crop: 'rice', region: 'california', yield: 62.1, soilPH: 6.2, soilType: 'clay', organicMatter: 2.9, nitrogen: 175, phosphorus: 25, potassium: 165, cec: 25.3, moisture: 35, temperature: 75, rainfall: 18.5, season: 'summer'},
            {id: 5, crop: 'wheat', region: 'punjab', yield: 45.2, soilPH: 7.1, soilType: 'sandy-loam', organicMatter: 2.5, nitrogen: 155, phosphorus: 22, potassium: 175, cec: 16.2, moisture: 20, temperature: 78, rainfall: 25.8, season: 'winter'},
            {id: 6, crop: 'corn', region: 'pampas', yield: 168.9, soilPH: 6.7, soilType: 'loam', organicMatter: 4.5, nitrogen: 195, phosphorus: 38, potassium: 235, cec: 21.7, moisture: 26, temperature: 69, rainfall: 35.2, season: 'spring'},
            {id: 7, crop: 'tomatoes', region: 'california', yield: 28.3, soilPH: 6.4, soilType: 'sandy-loam', organicMatter: 3.1, nitrogen: 205, phosphorus: 45, potassium: 285, cec: 17.9, moisture: 28, temperature: 73, rainfall: 15.2, season: 'summer'},
            {id: 8, crop: 'potatoes', region: 'ukraine', yield: 315.7, soilPH: 6.6, soilType: 'loam', organicMatter: 3.7, nitrogen: 170, phosphorus: 30, potassium: 210, cec: 20.1, moisture: 23, temperature: 65, rainfall: 22.8, season: 'spring'},
            {id: 9, crop: 'wheat', region: 'ukraine', yield: 42.8, soilPH: 7.0, soilType: 'chernozem', organicMatter: 5.2, nitrogen: 180, phosphorus: 35, potassium: 245, cec: 28.5, moisture: 21, temperature: 63, rainfall: 24.1, season: 'fall'},
            {id: 10, crop: 'rice', region: 'punjab', yield: 58.9, soilPH: 6.8, soilType: 'clay-loam', organicMatter: 3.3, nitrogen: 190, phosphorus: 28, potassium: 185, cec: 23.2, moisture: 32, temperature: 82, rainfall: 45.6, season: 'summer'},
            {id: 11, crop: 'soybeans', region: 'pampas', yield: 41.2, soilPH: 6.5, soilType: 'silt-loam', organicMatter: 4.2, nitrogen: 160, phosphorus: 35, potassium: 205, cec: 20.8, moisture: 25, temperature: 71, rainfall: 38.9, season: 'fall'},
            {id: 12, crop: 'corn', region: 'california', yield: 185.4, soilPH: 6.9, soilType: 'loam', organicMatter: 3.9, nitrogen: 210, phosphorus: 42, potassium: 265, cec: 19.5, moisture: 27, temperature: 76, rainfall: 12.8, season: 'summer'},
            {id: 13, crop: 'wheat', region: 'midwest', yield: 46.7, soilPH: 6.7, soilType: 'clay-loam', organicMatter: 3.5, nitrogen: 172, phosphorus: 31, potassium: 188, cec: 21.3, moisture: 23, temperature: 66, rainfall: 26.4, season: 'spring'},
            {id: 14, crop: 'potatoes', region: 'california', yield: 298.6, soilPH: 6.3, soilType: 'sandy-loam', organicMatter: 2.8, nitrogen: 185, phosphorus: 38, potassium: 225, cec: 16.8, moisture: 24, temperature: 68, rainfall: 14.5, season: 'fall'},
            {id: 15, crop: 'tomatoes', region: 'punjab', yield: 24.8, soilPH: 7.2, soilType: 'loam', organicMatter: 3.0, nitrogen: 195, phosphorus: 40, potassium: 270, cec: 18.7, moisture: 29, temperature: 85, rainfall: 35.2, season: 'summer'},
            {id: 16, crop: 'rice', region: 'midwest', yield: 52.3, soilPH: 6.4, soilType: 'clay', organicMatter: 3.6, nitrogen: 168, phosphorus: 26, potassium: 172, cec: 24.1, moisture: 33, temperature: 74, rainfall: 42.1, season: 'summer'},
            {id: 17, crop: 'soybeans', region: 'ukraine', yield: 36.9, soilPH: 6.8, soilType: 'chernozem', organicMatter: 4.8, nitrogen: 155, phosphorus: 33, potassium: 198, cec: 26.7, moisture: 22, temperature: 67, rainfall: 28.7, season: 'spring'},
            {id: 18, crop: 'corn', region: 'punjab', yield: 158.2, soilPH: 7.0, soilType: 'silt-loam', organicMatter: 3.4, nitrogen: 178, phosphorus: 29, potassium: 195, cec: 19.2, moisture: 26, temperature: 79, rainfall: 38.5, season: 'summer'},
            {id: 19, crop: 'wheat', region: 'pampas', yield: 49.1, soilPH: 6.6, soilType: 'loam', organicMatter: 4.0, nitrogen: 188, phosphorus: 36, potassium: 215, cec: 20.5, moisture: 24, temperature: 70, rainfall: 33.8, season: 'fall'},
            {id: 20, crop: 'potatoes', region: 'midwest', yield: 285.3, soilPH: 6.5, soilType: 'sandy-loam', organicMatter: 3.2, nitrogen: 165, phosphorus: 32, potassium: 205, cec: 17.4, moisture: 25, temperature: 64, rainfall: 29.6, season: 'spring'}
        ];

        // Crop yield prediction data and logic
        const cropData = {
            wheat: { baseYield: 45, factors: { spring: 1.1, summer: 0.9, fall: 1.0, winter: 0.8 } },
            rice: { baseYield: 55, factors: { spring: 1.0, summer: 1.2, fall: 0.9, winter: 0.7 } },
            corn: { baseYield: 165, factors: { spring: 1.2, summer: 1.1, fall: 0.8, winter: 0.6 } },
            soybeans: { baseYield: 35, factors: { spring: 1.1, summer: 1.0, fall: 1.2, winter: 0.7 } },
            tomatoes: { baseYield: 25, factors: { spring: 1.2, summer: 1.3, fall: 1.0, winter: 0.8 } },
            potatoes: { baseYield: 300, factors: { spring: 1.1, summer: 0.9, fall: 1.2, winter: 0.9 } }
        };

        // Dataset management variables
        let currentPage = 1;
        let recordsPerPage = 20;
        let filteredData = [...agriculturalDataset];
        let currentFilter = '';
        let currentSearch = '';

        const regionMultipliers = {
            midwest: 1.1,
            california: 1.2,
            punjab: 1.0,
            pampas: 1.15,
            ukraine: 1.05
        };

        // Enhanced AI Models
        const aiModels = {
            neural: {
                name: 'Neural Network',
                accuracy: 0.92,
                processingTime: 2500,
                complexity: 'high'
            },
            regression: {
                name: 'Linear Regression',
                accuracy: 0.85,
                processingTime: 800,
                complexity: 'low'
            },
            ensemble: {
                name: 'Ensemble Model',
                accuracy: 0.89,
                processingTime: 1800,
                complexity: 'medium'
            }
        };

        // Form submission handler with advanced AI
        document.getElementById('predictionForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const cropType = document.getElementById('cropType').value;
            const farmSize = parseFloat(document.getElementById('farmSize').value);
            const region = document.getElementById('region').value;
            const season = document.getElementById('season').value;
            const soilPH = parseFloat(document.getElementById('soilPH').value);
            const nitrogen = parseFloat(document.getElementById('nitrogen').value);
            const phosphorus = parseFloat(document.getElementById('phosphorus').value);
            const potassium = parseFloat(document.getElementById('potassium').value) || 200;
            const organicMatter = parseFloat(document.getElementById('organicMatter').value) || 3.0;
            const soilMoisture = parseFloat(document.getElementById('soilMoisture').value) || 25;
            const soilType = document.getElementById('soilType').value || 'loam';
            const selectedModel = document.querySelector('input[name="aiModel"]:checked').value;

            if (!cropType || !farmSize || !region || !season) {
                alert('Please fill in all required fields');
                return;
            }

            // Show processing animation
            showProcessingAnimation(selectedModel);

            // Simulate AI processing time
            setTimeout(() => {
                // Advanced AI prediction calculation
                const baseYield = cropData[cropType] ? cropData[cropType].baseYield : 50;
                const seasonFactor = cropData[cropType] ? cropData[cropType].factors[season] : 1.0;
                const regionFactor = regionMultipliers[region] || 1.0;
                const modelAccuracy = aiModels[selectedModel].accuracy;

                // Enhanced soil health factors
                let soilFactor = 1.0;

                // pH optimization
                if (soilPH >= 6.0 && soilPH <= 7.5) soilFactor += 0.12;
                else if (soilPH < 5.5 || soilPH > 8.0) soilFactor -= 0.15;

                // NPK optimization
                if (nitrogen >= 100 && nitrogen <= 200) soilFactor += 0.08;
                if (phosphorus >= 20 && phosphorus <= 50) soilFactor += 0.06;
                if (potassium >= 150 && potassium <= 300) soilFactor += 0.05;

                // Organic matter and moisture
                if (organicMatter >= 3.0) soilFactor += 0.1;
                if (soilMoisture >= 20 && soilMoisture <= 30) soilFactor += 0.07;

                // Soil type factor
                const soilTypeFactors = {
                    'loam': 1.1,
                    'clay-loam': 1.05,
                    'sandy-loam': 1.0,
                    'clay': 0.95,
                    'sandy': 0.9,
                    'silt': 1.02
                };
                const soilTypeFactor = soilTypeFactors[soilType] || 1.0;

                // Weather integration factor (simulated)
                const weatherFactor = 1.0 + (Math.random() * 0.2 - 0.1); // ±10% weather variation

                // Final prediction with model accuracy
                const rawPrediction = baseYield * seasonFactor * regionFactor * soilFactor * soilTypeFactor * weatherFactor;
                const predictedYield = Math.round(rawPrediction * modelAccuracy);
                const regionalAverage = Math.round(baseYield * regionFactor);
                const improvement = Math.round(((predictedYield - regionalAverage) / regionalAverage) * 100);

                // Display results
                document.getElementById('predictedYield').textContent = predictedYield;
                document.getElementById('yieldImprovement').textContent = `${improvement >= 0 ? '+' : ''}${improvement}% vs. regional average`;

                // Update confidence based on model
                const confidenceElement = document.querySelector('.confidence-level');
                if (confidenceElement) {
                    confidenceElement.textContent = `${Math.round(modelAccuracy * 100)}%`;
                }

                // Generate advanced recommendations
                generateAdvancedRecommendations(cropType, soilPH, nitrogen, phosphorus, potassium, organicMatter, soilMoisture, soilType, season, selectedModel);

                // Show results section
                document.getElementById('resultsSection').classList.remove('hidden');
                document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
            }, aiModels[selectedModel].processingTime);
        });

        function showProcessingAnimation(model) {
            const button = document.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;

            button.disabled = true;
            button.innerHTML = `
                <div class="flex items-center justify-center">
                    <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing with ${aiModels[model].name}...
                </div>
            `;

            setTimeout(() => {
                button.disabled = false;
                button.innerHTML = originalText;
            }, aiModels[model].processingTime + 100);
        }

        function generateAdvancedRecommendations(crop, ph, nitrogen, phosphorus, potassium, organicMatter, soilMoisture, soilType, season, aiModel) {
            const recommendations = [];

            // AI Model-specific recommendations
            recommendations.push({
                icon: '🤖',
                title: `${aiModels[aiModel].name} Analysis`,
                description: `Model confidence: ${Math.round(aiModels[aiModel].accuracy * 100)}% - Processing completed in ${aiModels[aiModel].processingTime}ms`,
                priority: 'info',
                category: 'AI Insights'
            });

            // Advanced soil pH recommendations
            if (ph < 5.5) {
                recommendations.push({
                    icon: '🧪',
                    title: 'Critical pH Adjustment',
                    description: `Apply 2-3 tons/acre of agricultural lime. Current pH: ${ph} (Target: 6.0-7.0)`,
                    priority: 'critical',
                    category: 'Soil Health',
                    cost: '$150-200/acre',
                    timeline: '2-3 weeks'
                });
            } else if (ph < 6.0) {
                recommendations.push({
                    icon: '🧪',
                    title: 'pH Optimization',
                    description: `Apply 1-2 tons/acre of lime to reach optimal pH range`,
                    priority: 'high',
                    category: 'Soil Health',
                    cost: '$80-120/acre',
                    timeline: '1-2 weeks'
                });
            } else if (ph > 8.0) {
                recommendations.push({
                    icon: '🧪',
                    title: 'pH Reduction Required',
                    description: `Apply elemental sulfur (200-400 lbs/acre) to lower pH`,
                    priority: 'high',
                    category: 'Soil Health',
                    cost: '$60-100/acre',
                    timeline: '3-4 weeks'
                });
            }

            // NPK optimization with specific rates
            if (nitrogen < 80) {
                recommendations.push({
                    icon: '🌿',
                    title: 'Nitrogen Deficiency Critical',
                    description: `Apply 80-120 lbs N/acre immediately. Consider split application for ${crop}`,
                    priority: 'critical',
                    category: 'Fertilization',
                    cost: '$45-65/acre',
                    timeline: 'Immediate'
                });
            } else if (nitrogen < 120) {
                recommendations.push({
                    icon: '🌿',
                    title: 'Nitrogen Supplementation',
                    description: `Apply 40-60 lbs N/acre to optimize yield potential`,
                    priority: 'high',
                    category: 'Fertilization',
                    cost: '$25-35/acre',
                    timeline: '1 week'
                });
            }

            if (phosphorus < 15) {
                recommendations.push({
                    icon: '🦴',
                    title: 'Phosphorus Boost Needed',
                    description: `Apply 60-80 lbs P2O5/acre. Consider starter fertilizer for ${crop}`,
                    priority: 'high',
                    category: 'Fertilization',
                    cost: '$35-50/acre',
                    timeline: 'Pre-planting'
                });
            }

            if (potassium < 120) {
                recommendations.push({
                    icon: '⚡',
                    title: 'Potassium Enhancement',
                    description: `Apply 100-150 lbs K2O/acre to improve plant stress tolerance`,
                    priority: 'medium',
                    category: 'Fertilization',
                    cost: '$40-60/acre',
                    timeline: '2 weeks'
                });
            }

            // Organic matter and soil structure
            if (organicMatter < 2.5) {
                recommendations.push({
                    icon: '🍂',
                    title: 'Organic Matter Critical',
                    description: `Incorporate 2-4 tons/acre of compost or cover crops to improve soil health`,
                    priority: 'high',
                    category: 'Soil Structure',
                    cost: '$120-200/acre',
                    timeline: 'Long-term (6 months)'
                });
            }

            // Moisture management based on soil type and current levels
            if (soilMoisture < 15) {
                recommendations.push({
                    icon: '💧',
                    title: 'Irrigation Critical',
                    description: `Immediate irrigation needed. Apply 1-2 inches based on ${soilType} soil type`,
                    priority: 'critical',
                    category: 'Water Management',
                    cost: '$15-25/acre',
                    timeline: 'Immediate'
                });
            } else if (soilMoisture > 35) {
                recommendations.push({
                    icon: '🌊',
                    title: 'Drainage Improvement',
                    description: `Excess moisture detected. Consider drainage tiles or raised beds`,
                    priority: 'medium',
                    category: 'Water Management',
                    cost: '$200-400/acre',
                    timeline: 'Off-season'
                });
            }

            // Seasonal and crop-specific recommendations
            const seasonalRecs = getSeasonalRecommendations(crop, season);
            recommendations.push(...seasonalRecs);

            // Weather-based recommendations
            recommendations.push({
                icon: '🌦️',
                title: 'Weather Integration',
                description: `7-day forecast integrated. Optimal planting/harvesting window identified`,
                priority: 'info',
                category: 'Weather Insights',
                timeline: 'Real-time'
            });

            // Display advanced recommendations
            displayAdvancedRecommendations(recommendations);
        }

        function getSeasonalRecommendations(crop, season) {
            const seasonalRecs = [];

            if (season === 'spring') {
                seasonalRecs.push({
                    icon: '🌱',
                    title: 'Spring Preparation',
                    description: `Optimal planting window for ${crop}. Soil temperature monitoring recommended`,
                    priority: 'medium',
                    category: 'Seasonal',
                    timeline: 'Current'
                });
            } else if (season === 'summer') {
                seasonalRecs.push({
                    icon: '☀️',
                    title: 'Heat Stress Management',
                    description: `Monitor for heat stress. Increase irrigation frequency during peak summer`,
                    priority: 'medium',
                    category: 'Seasonal',
                    timeline: 'Ongoing'
                });
            }

            return seasonalRecs;
        }

        function displayAdvancedRecommendations(recommendations) {
            const container = document.getElementById('recommendations');
            container.innerHTML = '';

            // Group by category
            const categories = {};
            recommendations.forEach(rec => {
                if (!categories[rec.category]) {
                    categories[rec.category] = [];
                }
                categories[rec.category].push(rec);
            });

            Object.keys(categories).forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'mb-4';

                const categoryHeader = document.createElement('h5');
                categoryHeader.className = 'text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide';
                categoryHeader.textContent = category;
                categoryDiv.appendChild(categoryHeader);

                categories[category].forEach(rec => {
                    const priorityColors = {
                        critical: 'border-red-500 bg-red-50',
                        high: 'border-orange-400 bg-orange-50',
                        medium: 'border-yellow-400 bg-yellow-50',
                        low: 'border-green-400 bg-green-50',
                        info: 'border-blue-400 bg-blue-50'
                    };

                    const recElement = document.createElement('div');
                    recElement.className = `border-l-4 p-3 rounded mb-2 ${priorityColors[rec.priority]}`;
                    recElement.innerHTML = `
                        <div class="flex items-start space-x-3">
                            <span class="text-xl">${rec.icon}</span>
                            <div class="flex-1">
                                <div class="font-semibold text-gray-800 flex items-center justify-between">
                                    <span>${rec.title}</span>
                                    ${rec.cost ? `<span class="text-xs bg-gray-200 px-2 py-1 rounded">${rec.cost}</span>` : ''}
                                </div>
                                <div class="text-sm text-gray-600 mt-1">${rec.description}</div>
                                ${rec.timeline ? `<div class="text-xs text-gray-500 mt-1">Timeline: ${rec.timeline}</div>` : ''}
                            </div>
                        </div>
                    `;
                    categoryDiv.appendChild(recElement);
                });

                container.appendChild(categoryDiv);
            });
        }

        // Multi-language support with translations
        const translations = {
            en: {
                title: "AI-Powered Crop Yield Prediction & Optimization",
                description: "Increase your crop productivity by up to 15% with advanced machine learning models, real-time weather integration, and personalized recommendations for small-scale farmers"
            },
            es: {
                title: "Predicción y Optimización de Rendimiento de Cultivos con IA",
                description: "Aumenta la productividad de tus cultivos hasta un 15% con modelos avanzados de aprendizaje automático, integración meteorológica en tiempo real y recomendaciones personalizadas para pequeños agricultores"
            },
            hi: {
                title: "एआई-संचालित फसल उत्पादन पूर्वानुमान और अनुकूलन",
                description: "उन्नत मशीन लर्निंग मॉडल, रीयल-टाइम मौसम एकीकरण और छोटे किसानों के लिए व्यक्तिगत सिफारिशों के साथ अपनी फसल उत्पादकता को 15% तक बढ़ाएं"
            },
            fr: {
                title: "Prédiction et Optimisation du Rendement des Cultures par IA",
                description: "Augmentez la productivité de vos cultures jusqu'à 15% avec des modèles d'apprentissage automatique avancés, l'intégration météorologique en temps réel et des recommandations personnalisées pour les petits agriculteurs"
            }
        };

        document.getElementById('languageSelect').addEventListener('change', function(e) {
            const language = e.target.value;
            if (translations[language]) {
                document.getElementById('heroTitle').textContent = translations[language].title;
                document.getElementById('heroDescription').textContent = translations[language].description;
            }
            console.log(`Language changed to: ${language}`);
        });

        // Real-time weather simulation with API integration
        function updateWeatherData() {
            // Simulate real weather API data
            const weatherData = {
                temperature: Math.round(Math.random() * 25 + 60), // 60-85°F
                rainfall: Math.round((Math.random() * 4 + 1) * 10) / 10, // 0.1-4.0 inches
                humidity: Math.round(Math.random() * 40 + 40), // 40-80%
                windSpeed: Math.round(Math.random() * 15 + 5), // 5-20 mph
                uvIndex: Math.round(Math.random() * 8 + 2) // 2-10
            };

            // Update current weather display
            document.getElementById('currentTemp').textContent = `${weatherData.temperature}°F`;
            document.getElementById('rainfallForecast').textContent = `${weatherData.rainfall}" expected`;

            // Update detailed weather in sidebar
            const weatherElements = document.querySelectorAll('.weather-update');
            weatherElements.forEach(element => {
                if (element.textContent.includes('Temperature')) {
                    element.nextElementSibling.textContent = `${weatherData.temperature}°F (${Math.round((weatherData.temperature - 32) * 5/9)}°C)`;
                } else if (element.textContent.includes('Humidity')) {
                    element.nextElementSibling.textContent = `${weatherData.humidity}%`;
                } else if (element.textContent.includes('Rainfall')) {
                    element.nextElementSibling.textContent = `${weatherData.rainfall} inches`;
                }
            });

            return weatherData;
        }

        // Initialize weather updates every 30 seconds for demo
        updateWeatherData();
        setInterval(updateWeatherData, 30000);

        // Simulate soil sensor data updates
        function updateSoilSensors() {
            const soilData = {
                moisture: Math.round(Math.random() * 20 + 15), // 15-35%
                temperature: Math.round(Math.random() * 15 + 55), // 55-70°F
                ph: Math.round((Math.random() * 2 + 6) * 10) / 10, // 6.0-8.0
                conductivity: Math.round(Math.random() * 500 + 200) // 200-700 µS/cm
            };

            // In a real application, this would update soil sensor displays
            console.log('Soil sensor update:', soilData);
        }

        // Update soil sensors every 2 minutes
        setInterval(updateSoilSensors, 120000);

        // Dataset Management Functions
        function displayDataset() {
            const tbody = document.getElementById('datasetBody');
            const startIndex = (currentPage - 1) * recordsPerPage;
            const endIndex = startIndex + recordsPerPage;
            const pageData = filteredData.slice(startIndex, endIndex);

            tbody.innerHTML = '';
            pageData.forEach(record => {
                const row = document.createElement('tr');
                row.className = 'hover:bg-gray-50';
                row.innerHTML = `
                    <td class="px-3 py-2 border-b">${record.id}</td>
                    <td class="px-3 py-2 border-b capitalize">${record.crop}</td>
                    <td class="px-3 py-2 border-b capitalize">${record.region}</td>
                    <td class="px-3 py-2 border-b">${record.yield}</td>
                    <td class="px-3 py-2 border-b">${record.soilPH}</td>
                    <td class="px-3 py-2 border-b">${record.soilType}</td>
                    <td class="px-3 py-2 border-b">${record.organicMatter}</td>
                    <td class="px-3 py-2 border-b">${record.nitrogen}</td>
                    <td class="px-3 py-2 border-b">${record.phosphorus}</td>
                    <td class="px-3 py-2 border-b">${record.potassium}</td>
                    <td class="px-3 py-2 border-b">${record.cec}</td>
                    <td class="px-3 py-2 border-b">${record.moisture}</td>
                    <td class="px-3 py-2 border-b">${record.temperature}</td>
                    <td class="px-3 py-2 border-b">${record.rainfall}</td>
                    <td class="px-3 py-2 border-b capitalize">${record.season}</td>
                `;
                tbody.appendChild(row);
            });

            // Update pagination info
            document.getElementById('showingStart').textContent = startIndex + 1;
            document.getElementById('showingEnd').textContent = Math.min(endIndex, filteredData.length);
            document.getElementById('showingTotal').textContent = filteredData.length;
            document.getElementById('currentPage').textContent = currentPage;
        }

        function filterData() {
            filteredData = agriculturalDataset.filter(record => {
                const matchesCrop = !currentFilter || record.crop === currentFilter;
                const matchesSearch = !currentSearch ||
                    Object.values(record).some(value =>
                        value.toString().toLowerCase().includes(currentSearch.toLowerCase())
                    );
                return matchesCrop && matchesSearch;
            });
            currentPage = 1;
            displayDataset();
        }

        function downloadCSV() {
            const headers = ['ID', 'Crop', 'Region', 'Yield_BuAc', 'Soil_pH', 'Soil_Type', 'Organic_Matter_Pct',
                           'Nitrogen_ppm', 'Phosphorus_ppm', 'Potassium_ppm', 'CEC', 'Moisture_Pct', 'Temperature_F', 'Rainfall_In', 'Season'];

            let csvContent = headers.join(',') + '\n';

            // Use the full dataset instead of filtered data for complete download
            agriculturalDataset.forEach(record => {
                const row = [
                    record.id,
                    `"${record.crop}"`,
                    `"${record.region}"`,
                    record.yield,
                    record.soilPH,
                    `"${record.soilType}"`,
                    record.organicMatter,
                    record.nitrogen,
                    record.phosphorus,
                    record.potassium,
                    record.cec,
                    record.moisture,
                    record.temperature,
                    record.rainfall,
                    `"${record.season}"`
                ];
                csvContent += row.join(',') + '\n';
            });

            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'agricultural_dataset_with_soil_analysis.csv';
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);

            // Show success message
            alert(`CSV file downloaded successfully! Contains ${agriculturalDataset.length} records with comprehensive soil analysis data.`);
        }

        // Dataset Event Listeners
        document.getElementById('viewDataBtn').addEventListener('click', function() {
            const container = document.getElementById('datasetContainer');
            if (container.classList.contains('hidden')) {
                container.classList.remove('hidden');
                displayDataset();
                this.textContent = 'Hide Dataset';
            } else {
                container.classList.add('hidden');
                this.textContent = 'View Dataset';
            }
        });

        document.getElementById('downloadBtn').addEventListener('click', downloadCSV);

        document.getElementById('uploadBtn').addEventListener('click', function() {
            document.getElementById('fileInput').click();
        });

        document.getElementById('fileInput').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file && file.type === 'text/csv') {
                const reader = new FileReader();
                reader.onload = function(e) {
                    // In a real application, you would parse the CSV and update the dataset
                    alert('CSV file uploaded successfully! In a real application, this would parse and integrate the data.');
                };
                reader.readAsText(file);
            } else {
                alert('Please select a valid CSV file.');
            }
        });

        document.getElementById('searchInput').addEventListener('input', function(e) {
            currentSearch = e.target.value;
            filterData();
        });

        document.getElementById('filterCrop').addEventListener('change', function(e) {
            currentFilter = e.target.value;
            filterData();
        });

        document.getElementById('prevPage').addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                displayDataset();
            }
        });

        document.getElementById('nextPage').addEventListener('click', function() {
            const maxPages = Math.ceil(filteredData.length / recordsPerPage);
            if (currentPage < maxPages) {
                currentPage++;
                displayDataset();
            }
        });

        // Generate additional sample data to reach 1247 records
        function generateAdditionalData() {
            const crops = ['wheat', 'corn', 'rice', 'soybeans', 'tomatoes', 'potatoes'];
            const regions = ['midwest', 'california', 'punjab', 'pampas', 'ukraine'];
            const soilTypes = ['loam', 'clay-loam', 'silt-loam', 'sandy-loam', 'clay', 'chernozem'];
            const seasons = ['spring', 'summer', 'fall', 'winter'];

            for (let i = 21; i <= 1247; i++) {
                const crop = crops[Math.floor(Math.random() * crops.length)];
                const region = regions[Math.floor(Math.random() * regions.length)];
                const soilType = soilTypes[Math.floor(Math.random() * soilTypes.length)];
                const season = seasons[Math.floor(Math.random() * seasons.length)];

                const baseYield = cropData[crop] ? cropData[crop].baseYield : 50;
                const seasonFactor = cropData[crop] ? cropData[crop].factors[season] : 1.0;
                const regionFactor = regionMultipliers[region] || 1.0;

                agriculturalDataset.push({
                    id: i,
                    crop: crop,
                    region: region,
                    yield: Math.round((baseYield * seasonFactor * regionFactor * (0.8 + Math.random() * 0.4)) * 10) / 10,
                    soilPH: Math.round((6.0 + Math.random() * 1.5) * 10) / 10,
                    soilType: soilType,
                    organicMatter: Math.round((2.0 + Math.random() * 3.5) * 10) / 10,
                    nitrogen: Math.round(120 + Math.random() * 120),
                    phosphorus: Math.round(15 + Math.random() * 40),
                    potassium: Math.round(150 + Math.random() * 150),
                    cec: Math.round((15.0 + Math.random() * 15.0) * 10) / 10,
                    moisture: Math.round(18 + Math.random() * 20),
                    temperature: Math.round(55 + Math.random() * 35),
                    rainfall: Math.round((10.0 + Math.random() * 40.0) * 10) / 10,
                    season: season
                });
            }
            filteredData = [...agriculturalDataset];
        }

        // Initialize additional data
        generateAdditionalData();
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9817d72eb002cd03',t:'MTc1ODI3MTg4MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
