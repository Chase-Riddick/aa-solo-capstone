from app.models import db, Catch

def seed_catches():
    db.session.add_all(
        [
        Catch(
            user_id = 2,
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch1-img.png',
            fish = "Westslope Cutthroat Trout",
            description = "Decent sized, healthy-looking trout.",
            length = 18.0,
            weight = 1.5,
            bait = 'Live Bait',
            long = 22.2751,
            lat = 46.5583),

        Catch(
            user_id = 3,
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch2-img.png',
            fish = "Chinoonk Salmon",
            description = "A doozy! Hooked it after just 20 minutes.",
            length = 26.0,
            weight = 14,
            lure = "Hotspot Apex Salmon Killer.",
            long = 22.2752,
            lat = 46.5583),

        Catch(
            user_id = 4,
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch3-img.png',
            fish = "Chinook Salmon",
            description = "My first fish this year!!!",
            length = 31.0,
            weight = 16.0,
            lure = "Hotspot Apex Salmon Killer.",
            long = 22.2753,
            lat = 46.5585),

        Catch(
            user_id = 5,
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch4-img.png',
            fish = "Cutthroat Trout",
            description = "Got in on the lake today. Got three more later on. What a great day!",
            length = 13,
            weight = 2.0,
            lure = "Red and shiny, found it in the garage..",
            long = 22.2751,
            lat = 46.5584),

        Catch(
            user_id = 6,
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch5-img.png',
            fish = "Rainbow Trout?",
            description = "Just hooked this gorgeous fish along the river.",
            length = 30.0,
            weight = 7.0,
            lure = "Yellow Rooster-tail.",
            long = 22.2751,
            lat = 46.5585),

        Catch(
            user_id = 6,
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch6-img.png',
            fish = "Rainbow Trout",
            description = "Just got this one too!",
            length = 17.0,
            weight = 3.2,
            lure = "Yellow Rooster-tail.",
            long = 22.2750,
            lat = 46.5584),

        Catch(
            user_id = 7,
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch7-img.png',
            fish = "Coho",
            description = "Got it out in mid-river today!",
            length = 38.0,
            weight = 23.0,
            long = 22.2756,
            lat = 46.5584),

        Catch(
            user_id = 8,
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch8-img.png',
            fish = "Not sure",
            description = "A monster.",
            length = 150.0,
            weight = 200.0,
            bait = 'A small child (mangled, but survived the incident)',
            long = 22.2758,
            lat = 46.5584),

        Catch(
            user_id = 9,
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch9-img.png',
            fish = "Coho Salmon",
            length = 30.0,
            weight = 15.0,
            lure = "Red and blue - creates a good contrast.",
            long = 22.2752,
            lat = 46.5583),

        Catch(
            user_id = 2,
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch10-img.png',
            fish = "Rainbow Trout",
            description = "A little luck today.",
            length = 6.0,
            weight = 0.2,
            lure = "Acme Castmaster.",
            long = 22.2753,
            lat = 46.5582),

        Catch(
            user_id = 4,
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch11-img.png',
            fish = "Chinook Salmon",
            description = "Decent sized, healthy-looking trout.",
            length = 24.0,
            weight = 4.5,
            bait = 'Live Bait',
            lure = "Hotspot Apex Salmon Killer.",
            long = 22.2756,
            lat = 46.5585),

        Catch(
            user_id = 1,
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch12-img.png',
            fish = "Yellow Perch",
            description = "First fish.",
            length = 13.0,
            weight = 2.0,
            bait = 'Earthworm',
            long = 22.2749,
            lat = 46.5585),
        ]
    )
    db.session.commit()

def undo_catches():
    db.session.execute('TRUNCATE catches RESTART IDENTITY CASCADE;')
    db.session.commit()
