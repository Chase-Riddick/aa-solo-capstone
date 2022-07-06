from app.models import db, User

def seed_users():
    db.session.add_all(
        [
        User(
        username='Demo',
        email='demo@aa.io',
        password='password',
        image_url='https://localcatches.s3.us-west-2.amazonaws.com/Screen+Shot+2022-07-06+at+08.45.13.png',
        ),

        User(
        username='JeffSple',
        email='JeffSple@aa.io',
        password='password',
        image_url='https://localcatches.s3.us-west-2.amazonaws.com/Screen+Shot+2022-07-06+at+08.46.10.png',
        ),

        User(
        username='FishinBob',
        email='FishinBob@aa.io',
        password='password',
        ),

        User(
        username='Lucy',
        email='Lucy@aa.io',
        password='password',
        ),

        User(
        username='NWRambing',
        email='NWrambing@aa.io',
        password='password',
        ),

        User(
        username='Samatha',
        email='Samatha@aa.io',
        password='password',
        ),

        User(
        username='Hookitin22',
        email='Hookitin22@aa.io',
        password='password',
        ),

        User(
        username='AcmeAngler',
        email='AcmeAngler@aa.io',
        password='password',
        ),

        User(
        username='George',
        email='George@aa.io',
        password='password',
        image_url='https://localcatches.s3.us-west-2.amazonaws.com/Screen+Shot+2022-07-06+at+08.46.10.png',
        ),
        ]
    )
    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
