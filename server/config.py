class Config(object):
    DEBUG = True
    TESTING = False

class ProductionConfig(Config):
    DEBUG = False
    USER_DOWNLOAD_FOLDER = "./downloads/"
    CODE_DOWNLOAD_FOLDER = "./server/flaskr/downloads/"
    
class DevelopmentConfig(Config):
    DEBUG = True
    TEMPLATES_AUTO_RELOAD=True
    USER_DOWNLOAD_FOLDER = "./downloads/"
    CODE_DOWNLOAD_FOLDER = "./server/flaskr/downloads/"
    ALLOWED_COMPRESSED_FILE_EXTENSIONS = set([".tar.gz",".tar.xz",".tar.bz2",".zip"])

class TestingConfig(Config):
    TESTING = True
