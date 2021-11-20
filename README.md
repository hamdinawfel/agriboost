# AGRIBOOST

> Agiribbost is for submitting a candidate to a business event

## Content

**[1. Technologies](#heading--1)**

**[2. Installation](#heading--2)**

**[3. Environment variables](#heading--3)**

**[4. Features](#heading--4)**

**[5. Folder Structure](#heading--5)**

**[6. Screenshots](#heading--6)**

## 1. Technologies <a name="heading--1"/>

| Technologie    | Version |
| -------------- | :-----: |
| react          | 17.0.2  |
| redux          |  4.0.5  |
| material-ui    | 4.11.0  |
| react-to-pdf   | 0.0.14  |
| npm            | 7.10.0  |
| node           | 10.16.0 |
| express        | 4.17.1  |
| passport       |  0.4.0  |
| passport-jwt   |  4.0.0  |
| passport-local |  1.0.0  |
| mongoose       | 5.10.13 |

## 2. Installation <a name="heading--2"/>

```
git clone https://github.com/HamdiNawfel/agriboost.git
npm install --save-dev nodemon
npm install
nodemon server
cd client
npm install
npm start

```

## 3. Environment variables <a name="heading--3"/>

```
touch .env
```

```
mongoURI= mongo_url...
SECRET_OR_KEY=...
REACT_APP_END_SUBMSITTION=1633535080000
REACT_APP_END_RECLAMATION=1633622344000
```

```
cd client
touch .env
```

```
INLINE_RUNTIME_CHUNK=false
GENERATE_SOURCEMAP=false
REACT_APP_END_SUBMSITTION=1633535080000
REACT_APP_END_RECLAMATION=1633622344000
```

## 4. Features <a name="heading--4"/>

> Dashboard features are written us _user stories_ with this forme: `As a [type of user], I want [an action] so that [a benefit/a value]`

> Please let me know if you want to access to the [product backlog](https://trello.com/b/6Z14DUQc/agriboost)
> for more details about this features.

- As a **candidate**, I want to be able to **know the event deadline** so that I can **submit my candidates and keep track it**
- As a **candidates**, I want to be able to **show user guide** so that I can **submit my candidate more easly**
- As a **candidates**, I want to be able to **ask for my condidates status** so that I can **get the result of my submittion**
- As an **candidates**, I want to be able to **send a reclamation** so that I can **get more details about my candidate status**
- As an **candidates**, I want to be able to **print the candidates status message** so that I can **keep share it**
- As a **manager**, I want to be able to **doesn't accept more candidates after the end of event** so that I can **make the event ending**
- As a **manager**, I want to be able to **doesn't accept more recalamation after the deadline of the reaclamations**make end of reclamation\*\*

## 5. Folder Structure <a name="heading--5"/>

> root structure

```
./
├── client
├── middlewares
├── models
│   ├── candidate.js
│   :
│  └── ...
│
├── routes
│   ├── candidateRouter.js
│   :
│   └── ...
│
└── server.js
```

> client structure

```
src
├── assets
├── pages
│   ├── home
│   │   ├── components
│   │   ├── actions.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   └── types.js
│   │
│   └── ...
│
├── redux
│    ├── RootReducer.js
│    └── Store.js
│
├── utils
│    ├── Navbar
│    :
│    └──...
│
├── App.js
└── index.js
```

## 6. Screenshots <a name="heading--6"/>

Home Page
![Mark Down](https://lh3.googleusercontent.com/zYQjiTWTlXA0RS5YeQIF8uGJuBBdqjanBS8NzEh42u-TxqieBa0GZF4h2JMxWjCu8dUKFAaeuCt9ofwrecvacbDZn4Q29Sr-U2dLKcdyPrd6wUDkql9rh7llty2dc3yIR2IZ2ObZWHsuxkxs0JEuM13l93AoRQL25d-C5Coay_QPKJ63X9HA_ijWNylHJRBX6jGQoGaCJ-VQvobrgbiU8q6Kp5FkQIa5xipcuz0GXICLMsfP_y5l8PcOEJ7jvuxpqL4VZ4gq06TmXyopKMN2aenueeWi0263tKZe9_HeDxskrn9J1kxilerpA8Aet2t-jqExci03WF4Mt5OsKscgJvwL7Xzvs8njQXsHv9tLXhjuNGV3fC4zciN62E_lkwx5pbwSQiwOM1ATwiRhsRDdM5fo5Ho0JaZqLy1GW3HCgQGY0LnJ_NWbrjorrcwDbitCkBgxuq1mmrhItPAKXM8lh5CTY_3e_nX5yJxWxW_kkzlUoaHRjMlLiK6H_PGbQzclYfJdLWQOJ_FDQp7U98yF4-lFE1MIYCRHSMwrv7reuMs8LA6nrcE578TT0I0nqKxnTz-je2FpdvLMVYFRPyFlE23N27YqWGF6-tGeKXMNqXzY1BeA5Ji6VbVJSxaU_a668WsJ_CiMztiZVUqVpx10FeKg-qyQlWs4MCV06yfs0shtKfH0J0eqkCSP744gQrxEjv_QqTQLcDwIJ_buOfkB7nRd=w1366-h625-no?authuser=0)

<details markdown=block>
<summary markdown=span>More Screenshots</summary>
 Stepper form
   <img src="https://lh3.googleusercontent.com/0l3HEFCpqRLp5y95FuJRVmJYBmfe4UB69TQ9NQiYpdCelWpe7fUbbm0evOc2kshPUQzwpbIzgYK4t4XfkG2wDACAwrnnFBTR146urzbiFn9HNSrotek0lt5vX2Txd_FJQiz2kvySsJKKMebBbTKuXRle11HCQt1iReAG3Z4ipp9CnM5RP7vhgy3MVt3QGMWnRYucYl6d4CCk7poMuxOC9yFxLyEJElrLypy6_zBRLuxuUI-iYCPKsqb2u1VTcHJ_UoPivywNDPOkrtWk05vaW2BQXN_w-H8idngsZAqThbshJS-ZHNuuN872Ruu6Bd81emmrUjgJ6OH0FquesmXPROIXXQM1S9BC65ySiklzkT5KI998qDBJJZJ74UMNpHoducQphvJhg8OdAc2cnp01kaHWHlDWUhMqw9EJ2a4kQyOorMJWmAyea5kMgCxPOSVOf3_fJe-h3j6f61kJKt8uk6Ed9KiSVwoS0EufP0ydye89Bj4HOFtAtlAI8HQt5NrrUhrpDobeVFUtSULMf_3wf7JXhAf9Am_LqeB1jZVNkqHKEHovI29VVjtw7eRR5xzK9GGdvhm_YnocDhnEUthHouvyCOF8Nu9JAEjnSCWKMybQzkRe5XkLCVQm_I-z1yiQEmPyhKT6IgMLOpjOBUmmIJrllYQKy-4JBXWaTT6CNnfP0kKBaxN514xOazgIDAeSzQUHvWNSitkqFNCN4j9HTjUN=w1362-h624-no?authuser=0" style="max-width: 100%;">
  
  Countdown Timer
  <img src="https://lh3.googleusercontent.com/DnBNvOohr9SojdhH3j88B7p_xwgNt0TdqRJDyJtSoOpQZOvUgLwoWTahBuNw9ky4-J6ibuPcFcDDUyITVp503DSEm6FhcQUHfTqPLj94tc6NPrSwFhLmH8S-FA_9N_RJ5C5AZmG-zkJ7vEe3rEA_oHDBPaiOh4GYmGzxDu8GBhRJuWQVofEhPGpYpjhuZU1Kty-ZPLskLtYciQhhY0f12EyR0d8vPb5p0LMNPY6zkajo5wjYtFNeasnpA5kuqIyM8G-EYK_vVbogAapNVoeALiCn4_Gd4vyYuec8cddI_gDXN-j97WI77S9YberywJqZlzIlgMreTQmmTvhsPsbNFv4SjPi9sczcuAEcACYK0VJaD67eGacVgkE_48vukzcSZi6p5n99bQJPToDWxtHpouiT2h4DrFUQF1UHQNVO_RhVXrp9hoWm9pXjAPO6kxysdGiP0m-EVJSnC3vQDGwaQ8xn6qNqUvBOgQaVUViNzIirCrlDILIULzFRgCl3sc3xvypxx0FPelvhU-CIva24N2NUjkdICRpCdLipYbWkirPw0KH_rzdki02OB-5bcmxrVUrLVdc7Lw3OPyEUludNX47z05hmOIEWpwBX3PCPjklAln8Eyvme2TMOWu3OTsuf8X8rPlZMcOzbs0HyqnIkxZBRRfF8WqLkP6hkmVk4Q4cIlQvwt5v3hfaNKKocR9ZqVKNm81CULU3LkAQVPFipGBW7=w1366-h623-no?authuser=0" style="max-width: 100%;">
  
  Result screens
  <img src="https://lh3.googleusercontent.com/eyhPIB4ONsPD7PcGoH0rrjEwWom4A_O2OHcJLafJDKiB0Xp9UgKlw0w2J9z8du8A5dOkPBDmeg-alJgJyeSJFB_ohRTUR1Y807TxUWSBk-_ujjMIw4hA9ckTnFwOFlRtBQjeQZwrPz4xHhNj7BdCrukUVEgeXGnBkyUJGTw8BmQDJsWUY07zRiPbmP_pWd11yO2U28ubeU1o4ftQhPhsAqhiorNerF9btGoaYCSRRSGfKwK7aOMpjWJvo4RKnJfK2WiVEHO6U-RQuJVZ5BdBgQsMN6jEd0mPgbq3W0vClydIG_4bYDbYaoqufOZyKIuXf92M-Mjhynk7yjPNauqtBoLmMsHTgJA-phvwT3DMGsgVgMs0PxvbvfsWoGtIciwWmchYP2GzIlp7zUzDta1AjKW-e_QzTS6ufxeTlJRpvke6tAREsuMNMkvQ4ddVHMMKWmWAtqDhIKj_dJrNAPvwu7-2sVXQ6mu8HfjgUdqvIUZL9uHFlxMVXeLhPjwO02hnLkeOEix4JmQ1NSoqUL355nucs-G9wiveXXdmu7hUodvvZwtFrKlChmm64nTxlF7MLFkLMdaLXxcYbjuINhBRQTEsZSt2JuQ6zjid2QUnn4pcaProSYY1OJfUXe0K7jLMlEgNPhMjzFzaz_ws2-UWo7Fm0-RZ7qjwzzNXYtseOrFytBuosgACAXODLKYA7JCiXXsLbrOqKCUwNCAzBgKILQwK=w1346-h617-no?authuser=0" style="max-width: 100%;">
  <img src="https://lh3.googleusercontent.com/v5drD0j8-mDJnpsp3XSex_JibQZBuk22eeFvIp_XeT4_LOl3SBKq-_egEhktXN41pUmnDSE1htSrUfIzXH6JxQVO6T81hg9f5KTyZzOzVgHbE4mmYIUrOTkRrQgc3vM7wzkXcioU9YFcF0ge8By8cBDKcIhRF0TK7GKkIgGeOVa76fHbG11uHQs8h6wJkGTjljLeqFaSZRseC-jbU44uFIwYj_zTp9aUn2uqbU2BeL8f1cP4G7fai4bQ1cHSY7Mxhv3tS7uAQJIEuNs44XvvHbKL4zIiUEZu1Lhp1cWp-ysWZwVI5YNBu3RlzphhWPc594hXZ04VXD6UMhfAPPOJbjuT1ESfGcdUWoTjQiHSr0yWhpnelZfhXKQzW0TuZfywwi4VL48t2nWcEvu49TE5HS6CnCMFJ6d0_h2eSlxdb6J300K0tgRjKeyxzGTNNDkKB-8X7UHbhCtrzID6gntw5f4eDcL0IQQ0ApjYG-yHFwjBS1HcmQqsfoEbXTCfmT03Hyq4nuwfY0SS0zAeO6WDt5T4UIwVRanHs-LIy2PNxE6X6A4jR0inqpzhOwQDm9IdquhsC50rTRjmZpzpLHImcimCL6ttQmS7lOe_f2qYD_gyKEG9S7RE0NTVD5vi8VIHEHhnHGQc5w1bylr8puPnQ3UGWFAhYbiAjjsUiS9daLr_a-E3X3UD-BGqR5BFKHtz2fJFbPfgPkZheVQE473XBweK=w1364-h616-no?authuser=0" style="max-width: 100%;">
 
   Reclamation screen
   <img src="https://lh3.googleusercontent.com/Q4bzf5G94tD5z0NOcpYUKvqyyvZjUH5Ynj4vNqG9cuiB6ENxGWzZ1HAY-iDv6Nd2yjugQTHk8Hb258SmUrtnm0V1wSjEhqqzxXqhDYAmARD1WQWdM9DZfAdqPSqYdm4sBvePOV7VXMnZp7SwHTN-jFT-NRrgpReKcecutVaUHemohUwrRn7BMuxBGsuEutmcjy6lQLhhMXigvuEHdQMDbLzxANWUHc8ww9DH-3QgG8CISZfejRl1Ps1364ON5FXDYqHHPJiUhuLI5eiSVzj-LIm_Xr8gsTF3022YGooA8gPKuR5AikcilPBIbHLBPlWpZ0WL6WAG04XKEd75zSAgiDi56nHiJFchtNvE80kCsSr7IwNQV9uOC61gQ6112poEV8pVrUvzZzQRrBk6PmbdIc6hROtDj6qUcFu-z7TjWHStImS5oWG5cTYfOrFZv3_4Kg2zTJxT1WRZ9uqwZjCfvsMmyvK1wngn9ky7vPsITWFt7ICNBA0BB9LmLwIYMwy3NxDHeyJ8q3P4rsHAa0kHSuaR0VGCSB8jBPlQgeYO_hOh0SR5rW-SJHEAzyAqWYloHquIkiNesA_966Wrpe8mQgvmjh7N2_0kWD4xr0hEL_EQ6fN13hhc35jdUeUcCnLq9RCFvJRGNuvuynODafGvXEDa79F7_8QlgjI01rZU5D3-qsFTrzXkDFi7y6AFqb5ClprBfeb2kOokGHhoQe-2D6D_=w1349-h620-no?authuser=0" style="max-width: 100%;">
   <img src="https://lh3.googleusercontent.com/Vu01w92aWgFVG-DFZv-axZKum4s_daFQEpdbKIfukIXNFYorMZCylH7ylAo5HaGzRyqzK39kdAtLzZ9A05GfhT-Vb2COMu9fVLEPev9s5Fg2C9_WDeL8Mz3IEK1drS8WzkZnpy0qp7pgmdRDkhbgKpF1wXoqxD5ml7ZRk7sbFpnupdeoBmEgp1naww0eYqFMHY5SHrKThkcKmjGt_F7ECom7JHt-9uNM9gG3ZlzdPmjI7PAuoIRqca2N2NYPBznZ4MtlKa9VtgleLhMdG18GiVCD7BOq-ag010U8bBziCpRE07p-oZuVU75SzZXZ4L22OtR-Vm85d1FZHfC6uMBkPllGNPoTw1gTzjyQndD9dXwutjNtW-3uMRLKaJdsE2q5FhFHeDWjNoGHVz11N-2EtrUhd7byglEmGio7ocdeGQeDQzHzUthEGNp01xDlR_r-8sRNGvcDJGM5sUF7ZL0mB4aSRYhfEaqhfI7o2J9Tj0iB0pUWcBFEZW1grY2OSjxlTHfYRhrdtn7AIHluCiXWrHVUac-FgZB6WI4mP3mF03JGkAFykYra1s7SEvn2C6mU0vgA3A_A8zQOG9jyeJ8cTd3AyEdXXsEZowWmNLzv2_qVJfn_wXv_TlzvNE2jjSEr9WUxs2XcCB-TXaGDOmgNQkc2yIsBegjvne5Mf5eAw5qFwXWvByFMW3H4mGRpsvyRgrbUIdtA-1X-y1xOSyEWHNbF=w1366-h621-no?authuser=0" style="max-width: 100%;">
</details>
