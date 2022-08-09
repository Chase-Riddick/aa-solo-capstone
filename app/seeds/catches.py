from app.models import db, Catch

def seed_catches():
    db.session.add_all(
        [
        Catch(
            user_id = 2,
            catch_time = '2022-07-13-8',
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch1-img.png',
            fish = "Westslope Cutthroat Trout",
            description = "Decent sized, healthy-looking trout.",
            length = 18.0,
            weight = 1.5,
            bait = 'Live Bait',
            long = -122.17453290808419,
            lat = 46.72446002296205),

        Catch(
            user_id = 3,
            catch_time = '2022-07-10-10',
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch2-img.png',
            fish = "Chinoonk Salmon",
            description = "A doozy! Hooked it after just 20 minutes.",
            length = 26.0,
            weight = 14,
            lure = "Hotspot Apex Salmon Killer.",
            long = -122.52620027039076,
            lat = 46.57055520017666),

        Catch(
            user_id = 4,
            catch_time = '2022-07-08-16',
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch3-img.png',
            fish = "Chinook Salmon",
            description = "My first fish this year!!!",
            length = 31.0,
            weight = 16.0,
            lure = "Hotspot Apex Salmon Killer.",
            long = -122.64271830898763,
            lat = 46.51447242424603),


        Catch(
            user_id = 5,
            catch_time = '2022-07-08-9',
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch4-img.png',
            fish = "Cutthroat Trout",
            description = "Got in on the lake today. Got three more later on. What a great day!",
            length = 13,
            weight = 2.0,
            lure = "Red and shiny, found it in the garage..",
            long = -122.16353436945248,
            lat = 46.73047985193346),

        Catch(
            user_id = 6,
            catch_time = '2022-07-10-10',
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch5-img.png',
            fish = "Rainbow Trout?",
            description = "Just hooked this gorgeous fish along the river.",
            length = 30.0,
            weight = 7.0,
            lure = "Yellow Rooster-tail.",
            long = -122.43660529828894,
            lat = 46.58987120718362),


        Catch(
            user_id = 6,
            catch_time = '2022-07-09-11',
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch6-img.png',
            fish = "Rainbow Trout",
            description = "Just got this one too!",
            length = 17.0,
            weight = 3.2,
            lure = "Yellow Rooster-tail.",
            long = -122.38025565530374,
            lat = 46.5250428027434),

        Catch(
            user_id = 7,
            catch_time = '2022-07-12-8',
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch7-img.png',
            fish = "Coho",
            description = "Got it out in mid-river today!",
            length = 38.0,
            weight = 23.0,
            long = -122.18012241556166,
            lat = 46.47635848633959),

        Catch(
            user_id = 8,
            catch_time = '2022-07-08-12',
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch8-img.png',
            fish = "Not sure",
            description = "A monster.",
            length = 150.0,
            weight = 200.0,
            bait = 'A small child (mangled, but survived the incident)',
            long = -122.29101755082121,
            lat = 46.77621542232999),

        Catch(
            user_id = 9,
            catch_time = '2022-07-10-13',
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch9-img.png',
            fish = "Coho Salmon",
            length = 30.0,
            weight = 15.0,
            lure = "Red and blue - creates a good contrast.",
            long = -122.4997760936144,
            lat = 46.55429023739105),

        Catch(
            user_id = 2,
            catch_time = '2022-07-10-11',
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch10-img.png',
            fish = "Rainbow Trout",
            description = "A little luck today.",
            length = 6.0,
            weight = 0.2,
            lure = "Acme Castmaster.",
            long = -122.2753,
            lat = 46.5582),

        Catch(
            user_id = 4,
            catch_time = '2022-07-08-13',
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch11-img.png',
            fish = "Chinook Salmon",
            description = "Decent sized, healthy-looking trout.",
            length = 24.0,
            weight = 4.5,
            bait = 'Live Bait',
            lure = "Hotspot Apex Salmon Killer.",
            long = -122.2756,
            lat = 46.5585),

        Catch(
            user_id = 1,
            catch_time = '2022-07-12-10',
            img_url = 'https://localcatches.s3.us-west-2.amazonaws.com/catch12-img.png',
            fish = "Yellow Perch",
            description = "First fish.",
            length = 13.0,
            weight = 2.0,
            bait = 'Earthworm',
            long = -122.2749,
            lat = 46.5585),

        Catch(
            user_id = 10,
            catch_time = '2022-07-12-6',
            img_url = 'xxxxxx',
            fish = "渤海刀鱼",
            description = "一条特别肥的渤海刀鱼，不太愿意咬钩",
            length = 30.0,
            weight = 14,
            bait = '串钩虾粉团',
            long = 121.169454,
            lat = 38.951938),

        Catch(
            user_id = 11,
            catch_time = '2022-07-10-5',
            img_url = 'xxxxxx',
            fish = "奇怪的鱼",
            description = "好险！在它长出腿之前抓住它了！钓到了个怪物，这他妈是啥？？？？",
            length = 25.0,
            weight = 12,
            bait = '蚯蚓',
            long = 121.034547,
            lat = 38.869511),

        Catch(
            user_id = 12,
            catch_time = '2022-07-11-5',
            img_url = 'xxxxxx',
            fish = "金龙鱼",
            description = "做饭就得用金龙鱼牌花生油味道好极了",
            length = 43.0,
            weight = 20,
            bait = '蜂蜜沙土虾粉',
            long = 121.498182,
            lat = 38.928048),

        Catch(
            user_id = 13,
            catch_time = '2022-07-11-18',
            img_url = 'xxxxxx',
            fish = "胖头宝",
            description = "4个小时钓到它，我要把它带回家做油炸胖头宝，肯定很好吃。",
            length = 38.0,
            weight = 19,
            bait = '假饵',
            long = 121.575023,
            lat = 38.868206),

        Catch(
            user_id = 14,
            catch_time = '2022-07-12-21',
            img_url = 'xxxxxx',
            fish = "鲢鱼",
            description = "今年的第一钓",
            length = 38.0,
            weight = 19,
            lure = '5号挪威钩玉米面粉团',
            long = 121.702262,
            lat = 38.872147),

        Catch(
            user_id = 15,
            catch_time = '2022-07-12-22',
            img_url = 'xxxxxx',
            fish = "鲤鱼",
            description = "这条鱼真大！",
            length = 25.0,
            weight = 12,
            lure = '蜂蜜沙土虾粉',
            long = 121.610072,
            lat = 38.888145),

        Catch(
            user_id = 16,
            catch_time = '2022-07-10-6',
            img_url = 'xxxxxx',
            fish = "龙王鱼",
            description = "看我钓到了一条龙王鱼宝宝，很久以前人们以为这是真的龙。我把它马上放回水里了，希望它能长得更大带给我好运。",
            length = 72.0,
            weight = 44,
            lure = '假饵',
            long = 121.832512,
            lat = 38.884083),

        Catch(
            user_id = 17,
            catch_time = '2022-07-9-7',
            img_url = 'xxxxxx',
            fish = "草鱼",
            description = "我儿子第一次钓鱼",
            length = 20.0,
            weight = 9,
            lure = '沙蟹',
            long = 121.5491452,
            lat = 38.865508),

        ]
    )
    db.session.commit()

def undo_catches():
    db.session.execute('TRUNCATE catches RESTART IDENTITY CASCADE;')
    db.session.commit()
