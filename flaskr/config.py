class Config(object):
    DEBUG = True
    TESTING = False

class ProductionConfig(Config):
    DEBUG = False
    MYSQL_DATABASE_USER = 'root'
    MYSQL_DATABASE_PASSWORD = 'root'# Put your MySQL root password here
    MYSQL_DATABASE_DB = 'HawkeyeWithData'
    MYSQL_DATABASE_HOST = 'localhost'
    
class DevelopmentConfig(Config):
    DEBUG = True
    TEMPLATES_AUTO_RELOAD=True
    MYSQL_DATABASE_USER = 'root'
    MYSQL_DATABASE_PASSWORD = 'RahulRB@1997'# Put your MySQL root password here
    MYSQL_DATABASE_DB = 'HawkeyeWithData'
    MYSQL_DATABASE_HOST = 'localhost'
    CACHE_TYPE = "null"
    UPLOAD_FOLDER = './hawkeye/uploads'
    ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'doc'])

class TestingConfig(Config):
    TESTING = True
