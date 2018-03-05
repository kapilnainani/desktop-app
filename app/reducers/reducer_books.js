export default function () {
  return [
    {
      id: "node",
      name: "Node",
      versionCommand: "node -v",
      dependencies: ["brew"],
      installation: "brew install node",
      adminPriviliges: false
    },
    {
      id: "brew",
      name: "Homebrew",
      versionCommand: "brew -v",
      dependencies: [],
      installation: '/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" ',
      adminPriviliges: false
    },
    {
      id: "git",
      name: "Git",
      versionCommand: "git --version",
      installation: "brew install git",
      dependencies: ["brew"],
      adminPriviliges: false
    },
    {
      id: "code",
      name: "Visual Studio Code",
      versionCommand: "code -v",
      installation: "brew cask install visual-studio-code",
      dependencies: ["brew"],
      adminPriviliges: false
    },
    {
      id: "sfdx",
      name: "Salesforce DX",
      versionCommand: "sfdx -v",
      installation: "npm install sfdx-cli -g",
      dependencies: ["node"],
      adminPriviliges: true
    },
    {
      id: "pmd",
      name: "PMD",
      versionCommand: "pmd",
      installation: "brew install pmd",
      dependencies: ["brew"],
      adminPriviliges: false
    },
    {
      id: "@appirio/ezbake",
      name: "Appirio Ezbake",
      versionCommand: "ezbake --version",
      installation: "npm install -g @appirio/ezbake",
      dependencies: ["node"],
      adminPriviliges: true
    },
    {
      id: "eslint",
      name: "ESLint",
      versionCommand: "eslint --version",
      installation: "npm install -g eslint",
      dependencies: ["node"],
      adminPriviliges: true
    },
    {
      id: "adx",
      name: "Appirio DX CLI",
      versionCommand: "adx -v",
      installation: "npm install -g @appirio/dx",
      dependencies: ["node"],
      adminPriviliges: true
    }
  ];
}
