node{
    stage( 'Git Clone'){
        checkout([$class: 'GitSCM',   userRemoteConfigs: [[credentialsId: 'GitHubCredJenkins', url: 'https://github.com/CommunicationID/NodeJS.git']]])
    }
    stage('Build'){
        nodejs(nodeJSInstallationName: 'nodejs15.3.0')
        { 
            sh ""npm install""
        }
    }
}
