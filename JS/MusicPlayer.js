// btn
// const btnHome = document.querySelector(".go-home");
// const btnPlayList = document.querySelector(".play-list");
const btnPlay = document.querySelector(".play-song");
const btnBack = document.querySelector(".back");
const btnForward = document.querySelector(".forward");
const btnRandom = document.querySelector(".random");
//
const audio = document.querySelector("#audio");
// const progress = document.querySelector(".progress");
// const playListBox = document.querySelector(".playlist-box");
const songs = document.querySelector(".list-song");
// const thumbnailSong = document.querySelector(".thumbnail-song img");
const nameSong = document.querySelector(".son-name");
const lyricSong = document.querySelector(".eon-name");

// const author = document.querySelector(".info-song .author");
const timeSong = document.querySelector(".duration-time");
const musicContent = document.querySelector(".music-content");
// const progressBar = document.querySelector(".progress-bar");
const currentTimeDisplay = document.querySelector(".current-time");
const nameSon = document.querySelector(".son-name");

const loop_music = document.querySelector(".loop");
var lyric = [
  "[Verse] Falling in quickly Tell me you feel something too Caught in the moment I'm lost here without you [Pre-Chorus] Tangled up in your web (Web) Holding on to every word you said I'm ready, I know I'm hoping it shows (It shows) Would you say the same? We're falling from outer space [Chorus] We're moving like a full pace supernova We're making all the headlines now And I just wanna seize the moment 'Cause we won't ever slow it down Kissing in the rain Taste just like champagne Balling everyday We're falling from outer space Hoping time won't change Got love on my brain Would you say the same? We're falling from outer space [Drop] We're falling from outer space We're falling from outer space We're falling from outer space We're falling from outer space [Verse] Falling in quickly Tell me you feel something too Caught in the moment I'm lost here without you [Pre-Chorus] Tangled up in your web (Web) Holding on to every word you said I'm ready, I know I'm hoping it shows (It shows) Would you say the same? We're falling from outer space [Chorus] We're moving like a full pace supernova We're making all the headlines now And I just wanna seize the moment 'Cause we won't ever slow it down Kissing in the rain Taste just like champagne Balling everyday We're falling from outer space Hoping time won't change Got love on my brain Would you say the same? We're falling from outer space [Drop] We're falling from outer space We're falling from outer space We're falling from outer space We're falling from outer space",
  "Baby, take my hand I want you to be my husband 'Cause you're my Iron Man And I love you 3000 Baby, take a chance 'Cause I want this to be something Straight out of a Hollywood movie I see you standing there In your hulk outerwear And all I can think Is where is the ring 'Cause I know you wanna ask Scared the moment will pass I can see it in your eyes Just take me by surprise And all my friends they tell me they see You're planning to get on one knee But I want it to be out of the blue So make sure I have no clue When you ask Baby, take my hand I want you to be my husband 'Cause you're my Iron Man And I love you 3000 Baby, take a chance 'Cause I want this to be something Straight out of a Hollywood movie Now we're having dinner And baby you're my winner I see the way you smile You're thinking about the aisle You reach in your pocket Emotion unlocking And before you could ask I answer too fast And all my friends they tell me they see You're planning to get on one knee So now I can't stop thinking about you I figured out all the clues So now I ask Baby, take my hand I want you to be my husband 'Cause you're my Iron Man And I love you 3000 Baby, take a chance 'Cause I want this to be something Straight out of a Hollywood movie Pa da da da da dam No spoilers please Pa da da da da dam No spoilers please Baby, take my hand I want you to be my husband 'Cause you're my Iron Man And I love you 3000 Baby, take a chance 'Cause I want this to be something Straight out of a Hollywood movie, baby Pa da da da da dam No spoilers please Pa da da da da dam No spoilers please Pa da da da da dam No spoiler please Pa da da da da dam And I love you 3000",
  "Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Yeah, I don't wanna fall asleep, I don't wanna pass away I been thinking of our future, 'cause I'll never see those days I don't know why this has happened, but I probably deserve it I tried to do my best, but you know that I'm not perfect I been praying for forgiveness, you've been praying for my health When I leave this Earth, hoping you'll find someone else 'Cause, yeah, we still young, there's so much we haven't done Getting married, start a family, watch your husband with his son I wish it could be me, but I won't make it out this bed I hope I go to Heaven, so I see you once again My life was kinda short, but I got so many blessings Happy you were mine, it sucks that it's all ending Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed (yeah, ayy, ayy) Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed (ayy, yeah) I'm happy that you here with me, I'm sorry if I tear up When me and you were younger, you would always make me cheer up Taking goofy videos and walking through the park You would jump into my arms every time you heard a bark Cuddle in your sheets, sing me sound asleep And sneak out through your kitchen at exactly 1:03 Sundays, went to church, on Mondays, watched a movie Soon you'll be alone, sorry that you have to lose me Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed",
  "Beautiful girls all over the world I could be chasing, but my time would be wasted They got nothing on you, baby Nothing on you, baby They might say hi, and I might say hey But you shouldn't worry, about what they say 'Cause they got nothing on you, baby Nothing on you, baby B.O.B I know you feel where I'm coming from So baby regardless of the things in my past every thing I've done Most of really was for the hell of the fun On the carousel, so around I spun With no directions just tryna get some Tryna chase skirts, living in the summer sun This is how I lost more than I had ever won And honestly I ended up with none There's no much nonsense, it's on my conscience I'm thinking baby, I should get it out And I don't wanna sound redundant, but I was wondering If there was something that you wanna know But never mind that, we should let it go 'Cause we don't wanna be a TV episode And all the bad thoughts, just let them go Go, go Beautiful girls all over the world I could be chasing, but my time would be wasted They got nothing on you, baby Nothing on you, baby They might say hi, and I might say hey But you shouldn't worry about what they say 'Cause they got nothing on you, baby Nothing on you, baby Hands down, there will never be another one I been around, and I never seen another one Look at your style, they ain't really got nothing on And you out, and you ain't got nothing on Baby, you the whole package, plus you pay your taxes And you keep it real while them other stay plastic You're my Wonder Woman, call me Mr. Fantastic Stop, now think about it I've been to London, I've been to Paris Even went out there to Tokyo Back home down in Georgia to New Orleans But you always steal the show And just like that girl you got me froze Like a Nintendo 64 If you never knew, well, now you know Know, know Beautiful girls all over the world I could be chasing, but my time would be wasted They got nothing on you, baby Nothing on you, baby They might say hi, and I might say hey But you shouldn't worry about what they say 'Cause they got nothing on you, baby Nothing on you, baby Everywhere I go, I'm always hearing your name And no matter where I'm at, girl, you make me wanna sing Whether a bus or a plane or a car or a train No other girls on my brain, and you the one to blame Beautiful girls all over the world I could be chasing, but my time would be wasted They got nothing on you, baby Nothing on you, baby They might say hi, and I might say hey But you shouldn't worry about what they say 'Cause they got nothing on you, baby Nothing on you, baby Yeah, and that's just how we do it And I'ma let this ride B.o.B and Bruno Mars",
  "Can I call you baby? Can you be my friend? Can you be my lover up until the very end? Let me show you love, oh, I don't pretend Stick by my side even when the world is givin' in, yeah Oh, oh, oh, don't Don't you worry I'll be there, whenever you want me I need somebody who can love me at my worst No, I'm not perfect, but I hope you see my worth 'Cause it's only you, nobody new, I put you first And for you, girl, I swear I'll do the worst If you stay forever, let me hold your hand I can fill those places in your heart no else can Let me show you love, oh, I don't pretend, yeah I'll be right here, baby, you know I'll sink or swim Oh, oh, oh, don't Don't you worry I'll be there, whenever you want me I need somebody who can love me at my worst No, I'm not perfect, but I hope you see my worth, yeah 'Cause it's only you, nobody new, I put you first (put you first) And for you, girl, I swear I'll do the worst I need somebody who can love me at my worst No, I'm not perfect, but I hope you see my worth 'Cause it's only you, nobody new, I put you first And for you, girl, I swear I'll do the worst",
  "I will always remember the day you kissed my lips, light as a feather. And it went just like this. No it's never been better than the summer of Two Thousand and Two. Ooh. We were only eleven, but acting like grown ups, like we are in the present. Drinking from plastic cups, singing love is forever and ever. Well I guess that was true. Ooh. Dancing on the hood in the middle of the woods on an old Mustang, where we sang songs with all of our childhood friends. And it went like this, say: Oops, I got ninety-nine problems singing bye, bye, bye. Hold up, if you wanna go and take a ride with me, better hit me baby one more time. Ah. Paint a picture for you and me, of the days when we were young. Singing at the top of both our lungs. Now we're under the covers. Fast-forward to eighteen. We are more than lovers. Yeah, we are all we need. When we're holding each other I'm taken back to Two Thousand and Two. Ooh. Dancing on the hood in the middle of the woods, on an old Mustang, where we sang songs with all of our childhood friends. And it went like this, say: Oops, I got ninety-nine problems singing bye, bye, bye. Hold up, if you wanna go and take a ride with me, better hit me baby one more time. Ah. Paint a picture for you and me, of the days when we were young. Singing at the top of both our lungs. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love. Ooh, ooh. Ooh, ooh. Dancing on the hood in the middle of the woods, on an old Mustang where we sang songs with all of our childhood friends. Oh, no. Oops, I got ninety-nine problems singing bye, bye, bye. Hold up, if you wanna go and take a ride with me, better hit me baby one more time. Paint a picture for you and me, of the days when we were young. Singing at the top of both our lungs. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love, love, love.",
"[Verse 1] Th???c th??u ????m ????? ngh?? suy v??? em nhi???u Th???t ra c?? nh???ng ??i???u l??m cho anh Kh??ng y??n ???????c gi???c B???y l??u ta kh??ng n??i nhau m???t c??u n??o Ch??? d??ng tin nh???n ch??o Tr??? l???i c???m gi??c nh?? l??c tr?????c C?? ph???i v?? anh v???n th?????ng v?? ?? Ch???ng suy ngh??, v??i l???n khi???n em u s???u C?? ph???i v?? anh tr??t v??i c??u n??i Ch???m v??o n??i ni???m ??au m?? ng?????i lu??n ch??n gi???u [Chorus] V??i c??u n??i c?? khi???n ng?????i thay ?????i C?? khi???n b??? m??i ???m ??m Nay ch??? c??n trong n???i nh??? V??i c??u n??i k??o ?????n m??u u t???i Cu???n h???t b??nh y??n l??c x??a b??n c???nh nhau M??i ??i xa ????? m??nh ta trong c??n ph??ng c??ng n?????c m???t trong l??ng [Verse 2] Ch???ng c??n gi???t n?????c m???t n??o cho em r??i C??ng ch???ng c??n g?? tha thi???t ????? n??i n??n l???i S??? ch??? mang ?????n th??m u s???u L??m d???u y??u phai m??u Ch???ng bi???t ta ph???i ??i v??? ????u Gi??? th?? l???i xin l???i c??n k???p th???i? L??m sao khi c???m x??c em ngu???i r???i Bao nhi??u l???n nh?? th??? r???i Kh??ng c??n c?? h???i n??o cho anh n???a ????u T???n th????ng nhau b??? nhi??u ????y th??i C?? ph???i v?? anh (c??ng t???i v?? anh) V???n th?????ng v?? ?? L??m em r???i tr?? Ng??y ????m t???i ngh?? suy V???y m?? ng?????i v?? t??m n??o bi???t g?? ????u C?? ph???i v?? anh Tr??t v??i c??u n??i Ch???m v??o n??i ni???m ??au m?? ng?????i lu??n ch??n gi???u [Chorus] V??i c??u n??i c?? khi???n ng?????i thay ?????i C?? khi???n b??? m??i ???m ??m Nay ch??? c??n trong n???i nh??? V??i c??u n??i k??o ?????n m??u u t???i Cu???n h???t b??nh y??n l??c x??a b??n c???nh nhau M??i ??i xa ????? m??nh ta trong c??n ph??ng c??ng n?????c m???t trong l??ng [Bridge] V?? d??ng c???m x??c kh??ng th??? tr??? v??? nh?? l??c ta v???a b???t ?????u V?? s??? nh?? th??? n??o n???u b??? l???i ng??y th??ng ???? t???ng v???i nhau M???t v??i c??u n??i v?? t??nh ?????y l??i m???i th??? v??? th?? qu?? kh??? Baby i just wanna say im sorry",
  "Light 'em up, light 'em up Tell me where you are, tell me where you are Summer nights, bright lights And the shootin' stars, they break my heart Callin' you now, but you're not pickin' up Shadows so close if that's still enough Light a match, light a match Baby, in the dark, show me where you are Oh, love How I miss you every single day When I see you on those streets Oh, love Tell me there's a river I can swim that will bring you back to me 'Cause I don't know how to love someone else I don't know how to forget your face No, love God, I miss you every single day and now you're so far away So far away It's breakin' me, losin' you We were far from perfect But we were worth it Too many fights, and we cried But never said we're sorry Stop sayin' you love me You're callin' me now, but I can't pick up Your shadow's still close, and I'm still in love The summer's over now But somehow it still breaks my heart We could have had this talk Oh Oh, love How I miss you every single day Whe I see you on those streets Oh, love Tell me there's a river I can swim that will bring you back to me 'Cause I don't know how to love someone else I don't know how to forget your face No, love God, I miss you every single day and now you're so far away So far away So far away, oh So far away So far away Oh, love How I miss you every single day When I see you on those streets Oh, love Tell me there's a river I can swim that will bring you back to me 'Cause I don't know how to love someone else I don't know how to forget your face Oh, love God, I miss you every single day when you're so far away",
  "_________",
  "Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Getting cold, but I have my own sweater Fuck your polyester, 'cause cotton's way better You were playing Jack and Rose When you sunk, only you froze, 'cause you gave her your sweater You're lost in Atlantic, trying not to panic But now it's to late to come back I mov??d on and I'm better Know my worth, I'm Heath??r not taken for granted Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Getting cold, but I have my own sweater Fuck your polyester, 'cause cotton's way better You were playing Jack and Rose When you sunk, only you froze, 'cause you gave her your sweater You're lost in Atlantic, trying not to panic But now it's to late to come back I mov??d on and I'm better Know my worth, I'm Heath??r not taken for granted Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey,can't remember But I bet you know the color of Heather's",
  "[????????? 'Hurt' ??????] [Verse 1: Hyein] ?????? ?????? ????????? ????????? ?????? ?????? ?????? ?????? ????????? ???????????? ????????? ?????? ??????????????? ???????????? ??? ?????? ????????????, ????????? ?????? ?????? ??? ?????? [Pre-Chorus: Haerin] ??? ???????????? ?????? ?????? ??? ??? ?????? ?????? ????????? ????????? ???, no ???????????? ???????????? ?????? ?????? ????????? ?????? ?????? ????????? [Chorus: Haerin, Hanni] 'Cause I'm not gonna be the one to get hurt Hurt (No, no) I'm not gonna be the one to get hurt Hurt (No, no) I'm not gonna be the one to get hurt Hurt (Oh, oh, ooh) I'm not gonna be the one to get hurt (Oh, oh, ooh) I'm not gonna be the one to get hurt (Oh, oh, ooh) I'm not gonna be the one to get hurt (Oh, oh, ooh) [Verse 2: Danielle] ?????? ????????? ?????? ????????? ??? ????????? ?????? ?????? ??? ?????? ????????? ???????????? ?????? ??????????????? ???????????? ??? ?????? ???????????? ????????? ?????? ?????? ??? ?????? [Pre-Chorus: Hyein] ??? ???????????? ?????? ?????? ??? ??? ???????????? ????????? ????????? ???, no ???????????? ???????????? ?????? ?????? ????????? ?????? ?????? ????????? [Chorus: Hyein, Minji] 'Cause I'm not gonna the one to get hurt Hurt (No, no) I'm not gonna the one to get hurt Hurt (No, no) I'm not gonna the one to get hurt Hurt (Oh, oh, ooh) Hurt (Oh, oh, ooh) [Outro: Haerin, Hanni] ???????????????, ?????? ????????? ?????? ?????? ????????? I'm not gonna be the one to get hurt ???????????????, ?????? ????????? ?????? ?????? ????????? I'm not gonna be the one to get hurt",
  "_________",
  "[Verse 1] Em, c?? nghe! Ng??n mu??n suy t?? trong m??n ????m V?? em, em c?? nghe! L???i y??u kia???gi?????lay v???i ??em V???t???qua con ph??? ch???c c?? ?????n???n??i b??nh y??n Ch???ng c???n c??n m?? chi???u l???p l??nh n??i th???n ti??n T??? bao tan n??t h??a m???t tr??i tim v???n nguy??n B???u tr???i kia tha thi???t th??m, ch???c c?? l??? l?? v?? em [Chorus] Gi???a khung tr???i hoa m???ng, ????i m??nh c?? nhau (C?? nhau) D?????i cung tr??ng ??m ?????m, c??ng nhau ?????c ao (?????c ao) D???u c?? khi ta s???u v?? kh??ng th???y nhau (Th???y nhau) V???n y??u nhau ??ong ?????y tr??m ngh??n ki???p sau [Verse 2] Em, c?? nghe! M??a xu??n trong tim r???n vang V?? em, em c?? nghe! T??nh y??u m?? anh h??m nay v???i mang T???a nh?? mu??n hoa l???p k??n n??i l??ng ta ????? cho bao nh??? th????ng kia kh??ng bao gi??? xa D?? nh???n l???y ?????ng cay gi???t ch???t ch??n t??nh anh Th???t l??ng anh v???n kh??ng, kh??ng ?????i thay (kh??ng ?????i thay) [Bridge] Ng?????i y??u ??i! Hoa mai ????m ch???i ????? cho th??m h????ng mu??n ng??n l???i C??n anh ch??? mong R???ng em v???n m??i b??n c???nh t??i L???i ca anh vi???t n??n c?? l??? s??? t??n phai D?? cho bao thi???t tha kia ????ng hay l?? sai Th?? v???n lu??n ??? ????y c???t c??u h??t anh v???a feel R???ng ng??y mai ????n em ch???c c?? l??? ???? l?? y??u [Chorus] Gi???a khung tr???i hoa m???ng, ????i m??nh c?? nhau (C?? nhau) D?????i cung tr??ng ??m ?????m, c??ng nhau ?????c ao (?????c ao) D???u c?? khi ta s???u v?? kh??ng th???y nhau (Th???y nhau) V???n y??u nhau ??ong ?????y tr??m ngh??n ki???p sau [Chorus] Gi???a khung tr???i hoa m???ng ????i m??nh c?? nhau (c?? nhau) D?????i cung tr??ng ??m ?????m c??ng nhau ?????c ao (ah ah ah ah ah) D???u c?? khi ta s???u v?? kh??ng th???y nhau (th???y nhau) V???n y??u nhau ??ong ?????y tr??m ngh??n ki???p sau (uh uh uh uh uh uh...)",
"1. Mu???n ??i v??i h??m Xa ch??nh n??i ta t???ng c?? ph??t ??m ?????m Tr?????c ng??y gi??ng t??? ?????n t??m ?????n khi nh???n ra n??n qu?? h??n Nh???ng ng??y th??ng s???ng b??n nhau Th?? m??nh mu???n m???t r???i. Gi??? nay em c?? l??? r???t vui C??ng ng?????i em y??u chung b?????c Kh??ng quay l???i nh??n D?? sao th?? anh v???n mong Em lu??n b??nh y??n V?? xin l???i v?? ch???ng ?????n Ch??c ph??c cho em. [??K:] V?? ng??y h??m nay em c?????i r???i V???n v??? v???t th????ng ??au m??i trong tim Ng?????i ????n ??ng may m???n ???y T??? nay ???? c?? em Ch??? mu???n ?????n ????y g???p em m???t l???n ????? th???y em h???nh ph??c Th??? n??o r???i anh ??i. V?? ng??y h??m nay em c?????i r???i Mai sau anh s???ng th??? n??o M???t ng?????i ???? mang c??? th??? gi???i S??nh ????i v???i t??nh y??u m???i Ng??y em ?????p nh???t tr??n ?????i L?? ng??y ch??ng ta xa m??i m???t ng?????i N??? duy??n ?????n nay m??nh tr??? h???t r???i. 2. ??o c?????i em m??u tr???ng tinh N?????c m???t anh c??ng tr???ng tinh C?? n???i ??au m?? v???n im l???ng thinh Nay ng??y vui c???a em Anh th???t kh??ng d??m tin ?????n l??c em ph???i n???m tay ng?????i Em s???p k??u l?? ch???ng C?????i th???t t??m ch??c ph??c Ni???m vui ??? tr??n thi???p h???ng. [Coda:] D?? c?? m???t ?????i anh c??? g???ng Th?? v???n kh??ng sao gi??? em M???t ng?????i ???? mang c??? th??? gi???i S??nh ????i v???i t??nh y??u m???i Ng??y em ?????p nh???t tr??n ?????i L?? ng??y ch??ng ta xa m??i m???t ng?????i N??? duy??n ?????n nay m??nh tr??? h???t r???i N??? duy??n ?????n nay m??nh tr??? h???t r???i.",
"They say that life is always easier After you let yourself come on down They say they'll give you all that you want And I'll waiting in the shadow of the sun She's in doubt but always been before Close the curtains, what you're waiting for And now we're keeping secrets Til I'm in the ground Changing color makes you waste away Just spin you eyes with a vivid mind Now we're seeing once behind the light And I'll be waiting in the shadow of the sun Finding treasure that's been on demise Buildings mountains in disguise Now we're keeping secrets Til I'm in the ground I'm in the shadow of the shadow of the sun Where I belong, there's something coming on I'm in the shadow of the shadow of the sun Oh and I need you I'm in the shadow of the shadow of the sun Where I belong, there's something coming on No more waiting, time are changing And there's something coming on I'm in the shadow of the shadow of the sun",

]
const listMusic = [

  ["y2mate.com - newjeans ?????????  hurt sped up", "Newjeans ?????????  Hurt",lyric[10]],
  ["y2mate.com - Em C?? Nghe  Kha", "Em C?? Nghe",lyric[12]],
  ["y2mate.com - H??m Nay Em C?????i R???i Orinn Remix  Kh???i ????ng  Nh???c Tr??? EDM Hot Tik Tok G??y Nghi???n Hay Nh???t 2020","H??m Nay Em C?????i R???i",lyric[13]],
  ["y2mate.com - Xomu  Tera Original Mix", "Xomu  Tera Original Mix",lyric[11]],
  ["y2mate.com - BEAUZ  Outerspace feat Dallas Monstercat Release", "BEAUZ  Outerspace",lyric[0]],
  ["y2mate.com - Vietsub  Lyrics I Love You 3000  Stephanie Poetri","I Love You 3000",lyric[1]],
  ["y2mate.com - Powfu  death bed Christian Lalama Remix","death bed",lyric[2]],
  ["y2mate.com - Nothing On You  Barry Brizzy  Vietsub  Lyric","Nothing On You",lyric[3]],
  ["y2mate.com - At My Worst  Pink Sweat  Lyrics  Vietsub ","At My Worst",lyric[4]],
  ["y2mate.com - AnneMarie  2002 Official Video","2002",lyric[5]],
  ["y2mate.com - vaicaunoicokhiennguoithaydoi  GREY D x TLINH  Official Music Video","vaicaunoicokhiennguoithaydoi",lyric[6]],
  ["y2mate.com - So Far Away  Adam Christopher Cover  Vietsub  Lyrics","So Far Away",lyric[7]],
  ["y2mate.com - The girl next door  ON TOP sped up","The girl next door - ON TOP",lyric[8]],
  ["y2mate.com - Heather x Eyes Blue Lofi Remix","Heather x Eyes Blue",lyric[9]],
]

songs.textContent = ''
for (let i = 0; i < listMusic.length; ++i) {
  temp = `<p class="name-song${i} char btnchar" data-path="${listMusic[i][0]}" data-index="${i}">[${listMusic[i][1]}]</p>`
  songs.insertAdjacentHTML(
      "beforeend",
      temp
  );
}

songs_event = []
for (let i = 0; i < listMusic.length; i++)
  songs_event.push(songs.querySelector('.name-song' + i))

class UI {
  constructor() {
    this.songIndex = 0
    this.loop = false
  }

  // get duration
  getDuration(music) {
    return new Promise(function (resolve) {
      music.addEventListener("loadedmetadata", function () {
        const time = formatTime(music.duration);
        resolve(time);
      });
    });
  }

  // load detail song when page loaded
  loadSong(music) {
    audio.src = `MP3/${music[0]}.mp3`;

    this.getDuration(audio).then((time) => {
      nameSong.textContent =music[1];
      lyricSong.textContent =music[2];
      timeSong.textContent = time;
    });
  }

  // play song
  playSong() {
    musicContent.classList.add("playing");
    btnPlay.textContent = '[Stop]'
    audio.play();
  }

  // pause song
  pauseSong() {
    musicContent.classList.remove("playing");
    btnPlay.textContent = '[Play]'
    audio.pause();
  }

  // prev song
  prevSong() {
    this.songIndex--;
    if (this.songIndex < 0)
      this.songIndex = listMusic.length - 1;
    this.loadSong(listMusic[this.songIndex]);


  }

  // next song
  nextSong() {
    this.songIndex++;
    if (this.songIndex > listMusic.length - 1)
      this.songIndex = 0;
    this.loadSong(listMusic[this.songIndex]);
  }

  // update progress
  updateProgress(e) {
    const { currentTime, } = e.srcElement;
    const time = formatTime(currentTime);
    currentTimeDisplay.textContent = time;
  }

  // select song in playlist
  selectSong(index) {
    this.songIndex = index
    this.loadSong(listMusic[index]);

    this.playSong();
  }

  //randomsong
  ranDom(index) {
    index = Math.floor(Math.random() *lyric.length);
    this.songIndex = index;
    this.loadSong(listMusic[index]);
  }

}

document.addEventListener("DOMContentLoaded", eventListeners);

function eventListeners() {
  const ui = new UI();

  // load song
  ui.loadSong(listMusic[ui.songIndex]);

  for(let i = 0; i < listMusic.length; ++i){
    songs_event[i].addEventListener("click", function() {
      index = parseInt(songs_event[i].getAttribute('data-index'))
      ui.selectSong(index)
    })
  }

  loop_music.addEventListener("click", function(){
    if(ui.loop)
      loop_music.textContent = '[Loop]'
    else
      loop_music.textContent = '[>Loop<]'
    ui.loop = !ui.loop
  })

  // play/pause song
  btnPlay.addEventListener("click", function () {
    if (musicContent.classList.contains("playing")) {
      ui.pauseSong();
    } else {
      ui.playSong();
    }
  });

  // update progress
  audio.addEventListener("timeupdate", function (e) {
    ui.updateProgress(e);
  });

  btnBack.addEventListener("click", function () {
    ui.prevSong();
    ui.playSong();
  });
  btnRandom.addEventListener("click", function () {
    ui.ranDom();
    ui.playSong();
  });


  btnForward.addEventListener("click", function () {
    ui.nextSong();
    ui.playSong();
  });

  // end song
  audio.addEventListener("ended", function () {
    if(ui.loop === false)
      ui.nextSong();
    ui.playSong();
  });

  // select song
  // songs.addEventListener("click", function (e) {
  //   ui.selectSong(e);
  // });
}

function formatTime(sec_num) {
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - hours * 3600) / 60);
  let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

  hours = hours < 10 ? (hours > 0 ? "0" + hours : 0) : hours;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (hours !== 0 ? hours + ":" : "") + minutes + ":" + seconds;
}