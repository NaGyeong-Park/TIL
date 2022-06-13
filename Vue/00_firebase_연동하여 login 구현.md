# firebase ?

파이어베이스(firebase)는 구글에서 제공하고 있는 모바일 및 웹 애플리케이션 개발 플랫폼이다.

웹에서 사용할 DB를 저장해 줄 수 있으며, 사진과 같은 자료를 storage에 저장 가능하다. 또한 로그인 계정을 Authentication에서 관리 가능하며, google, facebook, github와 같은 다양한 플랫폼과 로그인 계정을 연동하여 사용이 가능하다.

DB는 json 형식으로 제공하며, 편한 방식으로 현재 사용자에 대한 정보를 알아 낼 수 있어 사용에 용이하다.

단점으로는, firebase가 제공하는것이 다양하나, 개발자의 custom이 어렵다. authentication에서 제공하는 범위를 넘어가는 정보를 user에게 포함시키고 싶다면 따로 user db를 생성해서 user를 관리하는 방식으로 관리를 해야만 한다.