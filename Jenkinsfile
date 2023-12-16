pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Replace these commands with your actual build commands
                sh 'npm install' // Or any other dependency installation command
                sh 'npm run build' // Or any other build command
            }
        }

        stage('Deploy') {
            steps {
                // Replace this with your deployment command (e.g., copy files to a server)
                sh 'rsync -avz ./dist/* user@server:/path/to/destination/'
            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}
