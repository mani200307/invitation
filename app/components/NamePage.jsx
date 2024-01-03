'use client'

import React from 'react'
import { Cormorant, Playfair_Display, Poppins, Quicksand, Tangerine } from 'next/font/google';

const tangerine = Quicksand({
    weight: '500',
    subsets: ['latin']
})

const NamePage = () => {

    const name1 = "Bala. Sivanesh";
    const name2 = "&";
    const name3 = "T. Dhanalakshmi";
    const about = "We cordially invite you to our wedding ceremony";

    return (
        <main>
            <div id='HomePage' className="h-screen justify-evenly items-center flex flex-col bg-gradient-to-b from-[#ca8d8d] to-[#e0bfbf]">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    className='h-72 w-72'
                    stroke="#633535"
                    viewBox="0 0 918.000000 817.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,817.000000) scale(0.100000,-0.100000)"
                        fill="#633535" stroke="none">
                        <path d="M4430 7664 c-113 -6 -380 -35 -407 -45 -25 -9 -31 -40 -10 -56 8 -7
46 -6 112 3 512 68 1068 14 1562 -151 490 -163 938 -428 1290 -762 l72 -68
-15 -70 c-20 -89 -13 -218 15 -299 25 -70 278 -505 298 -513 32 -13 43 17 43
121 0 124 -21 249 -65 384 -18 56 -30 102 -26 102 9 0 147 -184 218 -290 57
-86 141 -227 180 -303 52 -101 50 -144 -23 -525 -58 -300 -66 -429 -35 -580
29 -138 82 -309 144 -467 42 -104 56 -131 73 -133 36 -5 42 16 32 123 -18 189
5 502 48 668 9 34 18 95 21 135 3 40 9 75 14 77 8 6 50 -162 79 -318 26 -145
48 -351 56 -542 l7 -161 -178 -189 c-241 -257 -321 -376 -375 -552 -45 -147
-14 -166 125 -75 143 95 269 232 352 385 29 53 42 60 36 20 -14 -90 -48 -262
-69 -354 l-25 -105 -92 -80 c-169 -147 -317 -344 -427 -569 -102 -208 -194
-523 -207 -711 -5 -73 -4 -84 11 -90 23 -9 48 6 137 78 395 319 620 741 635
1188 4 114 12 171 35 266 54 222 87 455 105 737 3 54 7 97 9 95 2 -2 20 -77
40 -168 91 -412 146 -557 308 -815 75 -119 250 -364 265 -369 21 -9 42 5 42
28 0 11 -9 44 -19 71 -32 85 -70 273 -91 455 -50 425 -141 705 -300 919 -61
82 -173 190 -232 224 -34 20 -37 26 -43 82 -17 152 -59 380 -96 514 -11 40
-18 75 -16 77 2 3 89 -81 192 -185 152 -154 201 -197 254 -224 111 -58 250
-87 414 -87 109 0 127 6 127 39 0 22 -11 32 -73 65 -129 69 -229 148 -372 291
-129 130 -148 145 -236 188 -67 34 -135 57 -225 79 -71 17 -134 32 -140 34 -7
1 -20 26 -29 54 -9 28 -41 107 -70 176 -29 68 -50 124 -47 124 4 0 31 -16 61
-35 121 -77 276 -125 408 -125 62 0 74 3 83 20 12 23 14 21 -115 117 -49 37
-119 89 -155 116 -97 73 -144 94 -230 101 -180 16 -164 9 -211 89 -50 84 -132
211 -183 281 -19 28 -34 51 -32 53 2 2 41 -15 88 -37 74 -36 109 -45 271 -72
102 -17 192 -28 201 -25 37 14 16 47 -71 112 -182 134 -328 188 -542 202 l-96
6 -134 139 c-600 623 -1369 1001 -2221 1092 -153 16 -404 25 -530 20z m2738
-1262 c28 -54 67 -145 86 -202 34 -103 70 -275 64 -307 -4 -20 -172 267 -200
340 -31 81 -37 267 -9 267 4 0 31 -44 59 -98z m409 -88 c71 -14 200 -71 248
-108 l20 -15 -20 0 c-70 0 -184 31 -268 74 -51 26 -96 51 -101 56 -15 14 35
11 121 -7z m410 -605 c68 -41 236 -173 225 -177 -22 -7 -133 28 -209 67 -82
41 -193 118 -193 133 0 5 31 7 69 5 49 -3 81 -11 108 -28z m-153 -327 c59
-188 73 -388 37 -550 -31 -137 -42 -215 -55 -387 l-12 -160 -32 100 c-93 291
-100 409 -47 695 19 102 43 229 52 283 10 53 21 97 25 97 4 0 18 -35 32 -78z
m370 -253 c133 -45 194 -86 316 -210 115 -118 203 -194 286 -246 24 -15 44
-32 44 -37 0 -12 -121 2 -208 25 -124 31 -157 56 -378 281 -112 115 -204 213
-204 217 0 11 61 -2 144 -30z m193 -1045 c130 -191 212 -442 253 -772 11 -92
27 -211 36 -265 9 -54 14 -100 11 -103 -8 -8 -146 211 -211 338 -70 135 -106
239 -160 459 -46 191 -106 484 -106 517 1 25 6 22 69 -44 37 -39 86 -97 108
-130z m-357 -350 c-60 -151 -137 -270 -246 -376 -78 -76 -152 -133 -161 -124
-18 18 72 192 155 299 82 107 276 311 280 294 2 -8 -11 -50 -28 -93z m-85
-941 c-61 -361 -231 -659 -529 -926 -86 -78 -91 -80 -94 -56 -5 43 37 227 84
369 104 313 284 604 487 784 l62 56 3 -68 c2 -37 -4 -108 -13 -159z"/>
                        <path d="M3700 7210 c-100 -26 -312 -134 -429 -218 -176 -125 -333 -290 -426
-447 -110 -185 -139 -372 -82 -525 50 -136 112 -198 326 -332 110 -69 113 -72
94 -87 -182 -141 -306 -259 -371 -353 -46 -67 -107 -193 -127 -263 -22 -74
-23 -178 -3 -226 36 -84 116 -146 228 -174 97 -25 282 -17 372 17 153 57 336
191 424 310 87 118 113 284 61 389 -45 92 -119 157 -304 265 -46 26 -83 51
-83 56 0 14 182 96 265 120 70 20 103 23 265 23 102 0 213 -4 248 -8 l63 -8
-3 28 c-3 24 -9 30 -53 40 -265 66 -641 8 -858 -134 -27 -18 -28 -18 -83 11
-101 53 -231 145 -293 206 -185 186 -170 406 49 685 174 223 547 491 784 564
125 39 225 19 263 -52 28 -50 23 -171 -10 -277 -54 -174 -233 -493 -336 -598
-41 -42 -42 -44 -25 -63 24 -26 40 -24 85 12 92 72 234 284 302 449 58 141 80
240 75 350 -6 129 -37 188 -123 232 -59 31 -196 34 -295 8z m-337 -1671 c274
-139 384 -305 317 -482 -28 -75 -99 -169 -173 -228 -81 -65 -285 -166 -372
-184 -182 -38 -294 1 -354 121 -68 136 18 345 236 569 83 85 257 235 274 235
5 0 38 -14 72 -31z"/>
                        <path d="M1834 6447 c-433 -314 -694 -773 -710 -1247 -4 -114 -12 -171 -35
-266 -54 -222 -87 -455 -105 -737 -3 -54 -7 -97 -9 -95 -2 2 -20 77 -40 168
-91 412 -146 557 -308 815 -75 119 -250 364 -264 369 -21 8 -43 -5 -43 -25 0
-10 11 -52 24 -93 38 -114 64 -250 86 -438 50 -423 141 -703 300 -917 61 -82
173 -190 232 -224 34 -20 37 -26 43 -82 17 -152 59 -380 96 -514 11 -40 18
-75 16 -77 -2 -3 -89 81 -192 185 -152 154 -201 197 -254 224 -111 58 -250 87
-414 87 -109 0 -127 -6 -127 -39 0 -22 11 -32 73 -65 129 -69 229 -148 372
-291 129 -130 148 -145 236 -188 67 -34 135 -57 225 -79 71 -17 134 -32 140
-34 7 -1 20 -26 29 -54 9 -28 41 -107 70 -176 29 -68 50 -124 47 -124 -4 0
-31 16 -61 35 -121 77 -276 125 -408 125 -62 0 -74 -3 -83 -20 -12 -23 -11
-24 95 -102 39 -29 108 -81 155 -116 117 -88 160 -108 250 -116 180 -16 164
-9 211 -89 50 -84 132 -211 183 -281 19 -28 34 -51 32 -53 -2 -2 -41 15 -88
37 -74 36 -109 45 -271 72 -102 17 -192 28 -201 25 -37 -14 -16 -47 72 -112
181 -134 327 -188 541 -202 l96 -6 134 -139 c533 -553 1205 -917 1946 -1053
330 -60 721 -75 1035 -40 173 19 200 26 200 54 0 35 -20 39 -125 25 -512 -68
-1068 -14 -1562 151 -490 163 -938 428 -1290 762 l-72 68 15 70 c20 89 13 218
-15 299 -25 70 -278 505 -298 513 -32 13 -43 -17 -43 -121 0 -124 21 -249 65
-384 18 -56 30 -102 26 -102 -9 0 -147 184 -218 290 -61 92 -143 230 -184 313
-49 96 -45 153 46 617 38 192 43 346 16 478 -29 138 -82 309 -144 467 -43 106
-56 131 -74 133 -34 5 -41 -23 -31 -128 19 -188 -4 -466 -56 -705 -9 -38 -16
-91 -16 -117 0 -81 -17 -62 -44 51 -60 248 -90 476 -102 752 l-6 165 177 190
c241 256 321 375 375 551 45 148 14 166 -127 73 -143 -94 -267 -229 -350 -382
-29 -54 -42 -61 -36 -20 14 90 48 262 69 354 l26 108 80 67 c165 137 329 353
439 578 107 219 199 546 202 715 2 78 0 85 -18 87 -11 1 -34 -8 -51 -20z m-28
-262 c-51 -241 -164 -515 -294 -710 -71 -106 -197 -252 -270 -313 l-52 -44 0
74 c0 40 7 112 15 161 64 362 245 673 544 935 93 80 94 77 57 -103z m-1265
-1097 c93 -144 182 -315 214 -409 54 -156 185 -726 185 -796 -1 -27 -4 -24
-69 43 -203 211 -309 482 -366 941 -14 112 -30 226 -35 255 -11 54 -12 78 -6
78 2 0 37 -51 77 -112z m984 -205 c-26 -109 -156 -297 -331 -478 -94 -98 -105
-107 -100 -79 18 107 148 331 253 438 61 63 162 146 177 146 4 0 5 -12 1 -27z
m-135 -1130 c91 -294 98 -405 45 -690 -19 -103 -42 -228 -51 -278 -22 -127
-23 -128 -50 -50 -65 188 -82 405 -44 575 30 133 48 270 56 413 4 70 8 127 10
127 2 0 17 -44 34 -97z m-872 -274 c124 -31 157 -56 378 -281 112 -115 204
-213 204 -217 0 -21 -173 34 -275 87 -55 29 -99 66 -210 177 -86 87 -171 162
-222 195 -45 30 -82 59 -83 64 0 12 121 -2 208 -25z m572 -907 c99 -39 260
-141 260 -164 0 -5 -31 -7 -70 -4 -49 3 -80 11 -107 27 -45 27 -233 169 -233
176 0 10 88 -10 150 -35z m845 -463 c104 -180 125 -231 132 -325 6 -74 -2
-144 -16 -144 -15 0 -111 197 -145 300 -40 120 -79 320 -62 320 2 0 43 -68 91
-151z m-502 -174 c54 -9 107 -28 170 -60 108 -55 121 -65 84 -65 -90 0 -277
66 -352 124 l-20 15 20 0 c11 0 55 -6 98 -14z"/>
                        <path d="M4585 5314 c-121 -29 -250 -101 -349 -194 -128 -120 -184 -242 -173
-376 6 -81 42 -138 153 -244 l75 -70 -115 -115 c-329 -330 -472 -665 -344
-811 84 -96 297 -79 517 42 154 85 382 253 507 376 l70 69 100 -79 c111 -87
152 -134 189 -213 40 -86 36 -100 -53 -193 -92 -96 -170 -193 -239 -296 -54
-79 -137 -227 -148 -259 -9 -29 -148 -73 -233 -73 -79 -1 -119 16 -154 64 -35
49 -31 100 15 187 21 39 35 76 32 81 -16 26 -82 1 -126 -47 -47 -50 -62 -90
-57 -157 5 -80 32 -120 107 -155 51 -24 67 -26 176 -25 66 0 137 5 159 12 l38
11 -6 -32 c-4 -18 -9 -81 -13 -141 -7 -129 5 -195 49 -260 39 -60 89 -86 165
-86 72 0 106 20 101 58 -3 26 -6 27 -85 34 -104 8 -139 26 -165 86 -27 60 -20
163 19 282 l28 85 69 36 c153 81 268 189 346 325 44 77 80 191 80 254 0 34 6
42 73 95 281 224 617 375 934 420 151 21 404 17 498 -9 184 -51 312 -160 401
-341 74 -150 88 -219 88 -435 0 -210 -16 -307 -80 -491 -57 -163 -118 -280
-248 -474 -276 -410 -644 -711 -979 -801 -91 -25 -250 -24 -301 1 -66 33 -81
63 -79 158 2 105 36 235 115 437 174 448 209 549 254 735 22 91 25 127 22 211
-4 110 -14 134 -55 134 -33 0 -71 -40 -119 -125 -22 -38 -59 -103 -82 -144
-26 -45 -39 -78 -33 -84 21 -21 56 0 100 57 l45 60 14 -35 c27 -65 2 -152
-158 -559 -161 -410 -197 -547 -187 -702 8 -125 53 -181 177 -224 80 -27 230
-25 335 5 560 157 1174 872 1316 1531 26 122 36 366 20 481 -27 183 -101 345
-214 465 -100 108 -199 165 -352 205 -78 21 -112 24 -265 23 -266 -1 -469 -38
-703 -128 -183 -71 -345 -159 -477 -261 -32 -25 -61 -42 -63 -38 -2 5 -12 32
-21 60 -25 76 -89 156 -199 251 -53 46 -97 86 -97 89 0 10 46 70 127 165 96
114 148 189 192 277 42 82 73 204 65 250 -23 124 -136 211 -274 211 -63 0 -95
-16 -84 -43 10 -27 36 -37 121 -44 73 -6 80 -8 117 -45 38 -38 39 -39 32 -93
-3 -31 -15 -79 -26 -107 -44 -117 -189 -332 -307 -458 l-60 -64 -231 163
c-128 89 -235 167 -238 172 -3 6 1 16 9 22 66 53 221 252 290 372 118 206 131
396 32 461 -26 17 -139 28 -180 18z m150 -109 c60 -59 9 -207 -149 -440 -64
-93 -219 -265 -240 -265 -20 0 -141 131 -167 180 -36 70 -33 156 9 242 74 151
313 306 475 307 38 1 53 -4 72 -24z m-192 -942 c95 -64 200 -136 235 -161 l62
-44 -50 -58 c-123 -142 -305 -280 -495 -375 -185 -93 -301 -117 -381 -79 -111
53 -68 220 118 468 68 91 320 366 335 366 3 0 82 -52 176 -117z m676 -886
c-11 -29 -40 -82 -65 -119 -62 -92 -244 -264 -244 -230 0 38 302 418 322 406
4 -3 -2 -28 -13 -57z"/>
                    </g>
                </svg>
                <div className={tangerine.className}>
                    <div className='flex flex-col md:flex-row items-center gap-2 md:gap-4'>
                        <h1 className='text-center text-[#633535] text-4xl'>{name1}</h1>
                        <h1 className='text-center text-[#633535] text-3xl'>{name2}</h1>
                        <h1 className='text-center text-[#633535] text-4xl'>{name3}</h1>
                    </div>
                </div>
                <h1 className='text-center mb-8 font-medium text-[#6b4646] text-2xl'>{about}</h1>
            </div>
        </main>
    )
}

export default NamePage