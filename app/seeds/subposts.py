from app.models import db, Subpost

def seed_subposts():
    db.session.add_all(
        [
            Subpost(
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                user_id=1,
                catch_id=4,
            ),

            Subpost(
                content='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                user_id=1,
                catch_id=8,
            ),

            Subpost(
                content='Ut enim ad minim veniam',
                user_id=1,
                catch_id=1,
            ),

            Subpost(
                content='quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                user_id=9,
                catch_id=13,
            ),

            Subpost(
                content='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                user_id=8,
                catch_id=1,
            ),

            Subpost(
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                user_id=2,
                catch_id=12,
            ),

            Subpost(
                content='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                user_id=2,
                catch_id=4,
            ),

            Subpost(
                content='Ut enim ad minim veniam',
                user_id=1,
                catch_id=4,
            ),

            Subpost(
                content='quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                user_id=4,
                catch_id=6,
            ),

            Subpost(
                content='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                user_id=3,
                catch_id=14,
            ),

            Subpost(
                content='Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque.',
                user_id=6,
                catch_id=15,
            ),

            Subpost(
                content='Vulputate sapien nec sagittis aliquam malesuada. Imperdiet massa tincidunt nunc pulvinar sapien.',
                user_id=3,
                catch_id=5,
            ),

            Subpost(
                content='Elementum tempus egestas sed sed risus pretium quam vulputate. Montes nascetur ridiculus mus mauris.',
                user_id=6,
                catch_id=1,
            ),

            Subpost(
                content='Vulputate sapien nec sagittis aliquam malesuada. Imperdiet massa tincidunt nunc pulvinar sapien.',
                user_id=3,
                catch_id=2,
            ),

            Subpost(
                content='Augue neque gravida in fermentum et sollicitudin ac orci.',
                user_id=2,
                catch_id=3,
            ),

            Subpost(
                content='Vulputate sapien nec sagittis aliquam malesuada. Imperdiet massa tincidunt nunc pulvinar sapien.',
                user_id=2,
                catch_id=7,
            ),

            Subpost(
                content='Vulputate sapien nec sagittis aliquam malesuada. Imperdiet massa tincidunt nunc pulvinar sapien.',
                user_id=3,
                catch_id=9,
            ),

            Subpost(
                content='Vulputate sapien nec sagittis aliquam malesuada. Imperdiet massa tincidunt nunc pulvinar sapien.',
                user_id=3,
                catch_id=10,
            ),

            Subpost(
                content='Vulputate sapien nec sagittis aliquam malesuada. Imperdiet massa tincidunt nunc pulvinar sapien.',
                user_id=3,
                catch_id=3,
            ),

            Subpost(
                content='Felis imperdiet proin fermentum leo vel. Arcu ac tortor dignissim convallis aenean et. Eu augue ut lectus arcu.',
                user_id=5,
                catch_id=2,
            ),


        ]
    )
    db.session.commit()

def undo_subposts():
    db.session.execute('TRUNCATE subposts RESTART IDENTITY CASCADE;')
    db.session.commit()