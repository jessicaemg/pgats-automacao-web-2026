const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Define o Mochawesome como o gerador de relatórios padrão
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'Relatório de Testes',
      embeddedScreenshots: true, // Insere a imagem diretamente no HTML
      inlineAssets: true,        // Empacota CSS/JS no próprio HTML
      saveAllAttempts: false,    // Salva apenas a imagem da última tentativa se houver retry

    },
  e2e: {
    specPattern: [
      'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      'cypress/modules/**/*.{js,jsx,ts,tsx}'
    ],
    baseUrl: "https://automationexercise.com/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
