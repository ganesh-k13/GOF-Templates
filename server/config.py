class Config(object):
    DEBUG = True
    TESTING = False

class ProductionConfig(Config):
    DEBUG = False
    DOWNLOAD_FOLDER = "./downloads/"
    
class DevelopmentConfig(Config):
    DEBUG = True
    TEMPLATES_AUTO_RELOAD=True
    DOWNLOAD_FOLDER = "./downloads/"

class TestingConfig(Config):
    TESTING = True
