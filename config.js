/**
 * Configuration File - Thiruchendur Murugan Restaurant
 * Store all sensitive and configurable settings here
 * 
 * DO NOT expose this file to the public in production
 * Use environment variables on your hosting platform
 */

const CONFIG = {
  // Payment Configuration
  PAYMENT: {
    UPI_ID: 'vijayakumarfeb28@oksbi',
    MERCHANT_NAME: 'Thiruchendur Murugan Restaurant',
    QR_CODE_PATH: 'images/qr-code.jpg'
  },

  // Restaurant Information
  RESTAURANT: {
    NAME: 'Thiruchendur Murugan Restaurant',
    LOGO: 'images/thiruchendur-murugan.jpg',
    CURRENCY: '₹'
  },

  // Security Settings
  SECURITY: {
    ENABLE_HTTPS: true,
    HSTS_MAX_AGE: 31536000, // 1 year in seconds
    CSP_ENABLED: true
  },

  // Logging Configuration
  LOGGING: {
    ENABLE_LOGS: true,
    LOG_LEVEL: 'info', // 'debug', 'info', 'warn', 'error'
    LOG_EVENTS: ['button_click', 'bill_creation', 'bill_reset', 'print_action']
  }
};

// Load configuration from environment variables if available (for deployment)
if (typeof process !== 'undefined' && process.env) {
  CONFIG.PAYMENT.UPI_ID = process.env.REACT_APP_UPI_ID || CONFIG.PAYMENT.UPI_ID;
  CONFIG.SECURITY.ENABLE_HTTPS = process.env.REACT_APP_HTTPS_ENABLED !== 'false';
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
