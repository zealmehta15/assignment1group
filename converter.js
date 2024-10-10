// Show the correct tab
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden')); // Hide all tabs
    document.getElementById(tabId).classList.remove('hidden'); // Show selected tab
  }
  
  //Resets fields
  function resetFields() {
    // Reset weight tab
    document.getElementById('weightvalues').value = '';
    document.getElementById('weightResult').textContent = '';

    // Reset distance tab
    document.getElementById('distancevalues').value = '';
    document.getElementById('distanceResult').textContent = '';

    // Reset temperature tab
    document.getElementById('temperaturevalues').value = '';
    document.getElementById('temperatureResult').textContent = '';
  }


  // Weight conversion function
  function weightConversion() {
    const input = document.getElementById('weightvalues').value.split(',').map(Number);
    const option = document.getElementById('weightOptions').value;
    
    // Filter out invalid inputs / negative inputs
    let result = input.filter(val => !isNaN(val) && val >= 0);
  
    if (result.length === 0) {
      document.getElementById('weightResult').textContent = 'Please enter valid numbers.';
      return;
    }
  
    if (option === 'lbtokg') {
      result = result.map(val => (val * 0.453592).toFixed(2));
    } else if (option === 'kgtolb') {
      result = result.map(val => (val * 2.20462).toFixed(2));
    }
    
    document.getElementById('weightResult').textContent = `Converted values: ${result.join(', ')}`;
  }
  
  // Distance conversion function
  function distanceconversion() {
    const input = document.getElementById('distancevalues').value.split(',').map(Number);
    const option = document.getElementById('distanceoptions').value;
    
    // Filter out invalid inputs (NaN) and negative inputs
    let result = input.filter(val => !isNaN(val) && val >= 0);
  
    if (result.length === 0) {
      document.getElementById('distanceResult').textContent = 'Please enter valid numbers.';
      return;
    }
  
    if (option === 'miletoKm') {
      result = result.map(val => (val * 1.60934).toFixed(2));
    } else if (option === 'KMtomile') {
      result = result.map(val => (val * 0.621371).toFixed(2));
    }
  
    document.getElementById('distanceResult').textContent = `Converted values: ${result.join(', ')}`;
  }
  
  // Temperature conversion function
  function temperatureconversion() {
    const input = document.getElementById('temperaturevalues').value.split(',').map(Number);
    const option = document.getElementById('temperatureoptions').value;
    
    // Filter out invalid inputs (NaN)
    let result = input.filter(val => !isNaN(val));
  
    if (result.length === 0) {
      document.getElementById('temperatureResult').textContent = 'Please enter valid numbers.';
      return;
    }
  
    if (option === 'ctoF') {
      result = result.map(val => ((val * 9/5) + 32).toFixed(2));
    } else if (option === 'Ftoc') {
      result = result.map(val => (((val - 32) * 5/9).toFixed(2)));
    }
    
    document.getElementById('temperatureResult').textContent = `Converted values: ${result.join(', ')}`;
  }
  