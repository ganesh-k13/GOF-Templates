import setuptools
from setuptools import setup
try:
    from pypandoc import convert
    read_md = lambda f: convert(f, 'rst')
except ImportError:
    print("warning: pypandoc module not found, could not convert Markdown to RST")
    read_md = lambda f: open(f, 'r').read()

setuptools.setup(
    name="GOF_templates",
    version="0.0.1",
    author="Ganesh Kathiresan",
    author_email="ganesh3597@gmail.com",
    description="Provides pattern templates based on user requirements ",
    long_description=read_md('README.md'),
    long_description_content_type="text/markdown",
    url="https://github.com/ganesh-k13/GOF-Templates",
    packages=['GOF_templates'],
    package_dir = {'GOF_templates': 'GOF_templates/'},
    # package_data={'titanium_rhythm': ['info/*.*', 'song_info/*.xml']},
    classifiers=(
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: Attribution-ShareAlike 4.0 International",
        "Operating System :: OS Independent",
    ),
    # install_requires=[
          # 'discogs_client == 2.2.1',
          # 'eyeD3 == 0.8.7',
          # 'pyacoustid == 1.1.5',
          # 'pytest == 3.6.1',
          # 'requests == 2.18.4',
          # 'setuptools == 38.6.0',
          # 'validators == 0.12.2',
      # ],
)
