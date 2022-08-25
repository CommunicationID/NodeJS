node{
    stage( 'Git Clone'){
        checkout([$class: 'GitSCM', branches: [[name: '*/main']],  userRemoteConfigs: [[credentialsId: 'GitHubCredJenkins', url: 'https://github.com/CommunicationID/NodeJS.git']]])
    }
}
