node{
    stage( 'Git Clone'){
        checkout([$class: 'GitSCM',   userRemoteConfigs: [[credentialsId: 'GitHubCredJenkins', url: 'https://github.com/CommunicationID/NodeJS.git']]])
    }
}
