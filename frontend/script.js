function simulateDisruption() {
    const btn = document.getElementById('simulateBtn');
    const systemLog = document.getElementById('systemLog');
    const workabilityScore = document.getElementById('workabilityScore');
    const workLoss = document.getElementById('workLoss');
    const dynamicPayout = document.getElementById('dynamicPayout');
    const fraudStatus = document.getElementById('fraudStatus');
    
    // Disable button
    btn.disabled = true;
    
    // Clear log
    systemLog.innerHTML = '';
    
    // Reset values
    workabilityScore.textContent = '78';
    workLoss.textContent = '0%';
    dynamicPayout.textContent = '₹0';
    fraudStatus.textContent = 'Verified';
    fraudStatus.className = 'fraud-badge';
    
    // Step 1: Analyzing environmental data
    setTimeout(() => {
        addLog('Analyzing environmental data...', 'processing');
    }, 300);
    
    // Step 2: Rainfall intensity exceeds threshold
    setTimeout(() => {
        addLog('Rainfall intensity exceeds threshold', 'warning');
    }, 1000);
    
    // Step 3: Computing workability score
    setTimeout(() => {
        addLog('Computing workability score...', 'processing');
    }, 1700);
    
    // Step 4: Workability score dropped
    setTimeout(() => {
        workabilityScore.textContent = '42';
        addLog('Workability score dropped to 42/100', 'warning');
    }, 2400);
    
    // Step 5: Workability below threshold
    setTimeout(() => {
        addLog('Workability score below threshold - Trigger activated', 'warning');
    }, 3100);
    
    // Step 6: Validating worker location
    setTimeout(() => {
        addLog('Validating worker location...', 'processing');
    }, 3800);
    
    // Step 7: Cross-checking sensor data
    setTimeout(() => {
        addLog('Cross-checking sensor data (GPS, Accelerometer, Gyroscope)...', 'processing');
    }, 4500);
    
    // Step 8: No anomaly detected
    setTimeout(() => {
        addLog('No anomaly detected - Sensor validation passed', 'success');
        fraudStatus.textContent = 'Verified';
    }, 5200);
    
    // Step 9: Trigger condition confirmed
    setTimeout(() => {
        addLog('Trigger condition confirmed', 'success');
    }, 5900);
    
    // Step 10: Calculating work loss
    setTimeout(() => {
        addLog('Calculating work loss percentage...', 'processing');
    }, 6600);
    
    // Step 11: Work loss percentage
    setTimeout(() => {
        workLoss.textContent = '50%';
        addLog('Work loss calculated: 50% of working hours', 'warning');
    }, 7300);
    
    // Step 12: Calculating dynamic payout
    setTimeout(() => {
        addLog('Calculating dynamic payout...', 'processing');
    }, 8000);
    
    // Step 13: Payout calculation
    setTimeout(() => {
        addLog('Payout = Daily Earnings (₹800) × Work Loss (50%) = ₹400', 'processing');
    }, 8700);
    
    // Step 14: Processing payout
    setTimeout(() => {
        dynamicPayout.textContent = '₹400';
        addLog('Processing payout...', 'processing');
    }, 9400);
    
    // Step 15: Payout credited
    setTimeout(() => {
        addLog('₹400 credited successfully', 'success');
        btn.disabled = false;
    }, 10100);
}

function addLog(message, type) {
    const systemLog = document.getElementById('systemLog');
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    
    const status = document.createElement('span');
    status.className = 'log-status';
    
    const msg = document.createElement('span');
    msg.className = 'log-message';
    msg.textContent = message;
    
    entry.appendChild(status);
    entry.appendChild(msg);
    
    systemLog.appendChild(entry);
    
    // Auto-scroll to bottom
    systemLog.scrollTop = systemLog.scrollHeight;
}
