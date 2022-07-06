import imp
from flask.cli import AppGroup
from .users import seed_users, undo_users
from .catches import seed_catches, undo_catches
from .conditions import seed_conditions, undo_conditions
from .subposts import seed_subposts, undo_subposts

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

@seed_commands.command('all')
def seed():
    seed_users()
    seed_catches()
    seed_conditions()
    seed_subposts()



# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_subposts()
    undo_conditions()
    undo_catches()
    undo_users()
