from setuptools import setup, find_packages

setup(
    name='scale',
    version='0.0.1',
    description='App to accommodate Weighing scale barcode with ERPNext POS',
    author='ERPGulf',
    author_email='support@ERPGulf.com',
    packages=find_packages(),
    include_package_data=True,
    install_requires=('frappe',),
)
