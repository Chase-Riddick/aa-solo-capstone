from app.models import db, User

def seed_users():
    db.session.add_all(
        [
        User(
        username='Demo',
        email='demo@aa.io',
        password='password',
        img_url='https://localcatches.s3.us-west-2.amazonaws.com/Screen+Shot+2022-07-06+at+08.45.13.png',
        ),

        User(
        username='Jeff Spleils',
        email='JeffSple@aa.io',
        password='password',
        img_url='https://localcatches.s3.us-west-2.amazonaws.com/Screen+Shot+2022-07-06+at+08.46.10.png',
        ),

        User(
        username='Bog Angleton',
        email='FishinBob@aa.io',
        password='password',
        ),

        User(
        username='Lucy GoodLuck',
        email='Lucy@aa.io',
        password='password',
        ),

        User(
        username='Sam Fisher',
        email='NWrambing@aa.io',
        password='password',
        ),

        User(
        username='Samatha Smith',
        email='Samatha@aa.io',
        password='password',
        ),

        User(
        username='Jay Hook',
        email='Hookitin22@aa.io',
        password='password',
        ),

        User(
        username='Ryan Reel',
        email='AcmeAngler@aa.io',
        password='password',
        ),

        User(
        username='George Gearyy',
        email='George@aa.io',
        password='password',
        img_url='https://localcatches.s3.us-west-2.amazonaws.com/Screen+Shot+2022-07-06+at+08.46.10.png',
        ),

        User(
        username='杨海洋',
        email='10@aa.io',
        password='password',
        ),

        User(
        username='王秋月',
        email='11@aa.io',
        password='password',
        img_url='https://localcatches.s3.us-west-2.amazonaws.com/Screen+Shot+2022-07-06+at+08.46.10.png',
        ),

        User(
        username='张秀英',
        email='12@aa.io',
        password='password',
        ),

        User(
        username='李伟',
        email='13@aa.io',
        password='password',
        ),

        User(
        username='刘强',
        email='14@aa.io',
        password='password',
        ),

        User(
        username='李平',
        email='15@aa.io',
        password='password',
        ),

        User(
        username='王放',
        email='16@aa.io',
        password='password',
        ),

        User(
        username='小张',
        email='17@aa.io',
        password='password',
        img_url='https://localcatches.s3.us-west-2.amazonaws.com/Screen+Shot+2022-07-06+at+08.46.10.png',
        )
        ]
    )
    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
