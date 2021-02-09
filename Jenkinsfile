pipeline {
    agent {
        docker {
            image 'node:14.15.4'
            args '-p 4200:4200'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npx -p @angular/cli@11.1.0 ng --help'
                sh 'npx -p @angular/cli@11.1.0 ng build'
            }
        }
        stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}