from app.models import db, Condition



def seed_conditions():
    db.session.add_all(
        [
        Condition(
            catch_id = 1
            ),
        Condition(
            catch_id = 2
            ),
        Condition(
            catch_id = 3
            ),
        Condition(
            catch_id = 4
            ),
        Condition(
            catch_id = 5
            ),
        Condition(
            catch_id = 6
            ),
        Condition(
            catch_id = 7
            ),
        Condition(
            catch_id = 8
            ),
        Condition(
            catch_id = 9
            ),
        Condition(
            catch_id = 10
            ),
        Condition(
            catch_id = 11
            ),
        Condition(
            catch_id = 12
            ),
        ]
    )
    db.session.commit()

def undo_conditions():
    db.session.execute('TRUNCATE conditions RESTART IDENTITY CASCADE;')
    db.session.commit()