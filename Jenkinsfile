pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm (assuming you don't have a global Node installation on Jenkins)
                sh 'curl -sL https://deb.nodesource.com/setup_14.x | bash -'
                sh 'apt-get install -y nodejs'

                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the React.js application
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            // You can add post-build actions or notifications here
            echo 'Build successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
