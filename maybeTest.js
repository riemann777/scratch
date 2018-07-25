var R = require('ramda'),
    Maybe = require("./Maybe");

var user = {
    email: 'james@example.com',
    accountDetails: {
        address: {
            street:   '123 Fake St',
            city:     'Exampleville',
            province: 'NS',
            postcode: '1234'
        }
    },
    preferences: {}
};

var banners = {
    'AB': '/assets/banners/alberta.jpg',
    'BC': '/assets/banners/british-columbia.jpg',
    'MB': '/assets/banners/manitoba.jpg',
    'NL': '/assets/banners/newfoundland-labrador.jpg',
    'NS': '/assets/banners/nova-scotia.jpg',
    'NT': '/assets/banners/northwest-territories.jpg',
    'ON': '/assets/banners/ontario.jpg',
    'PE': '/assets/banners/prince-edward.jpg',
    'QC': '/assets/banners/quebec.jpg',
    'SK': '/assets/banners/saskatchewan.jpg',
    'YT': '/assets/banners/yukon.jpg',
};

var user = {
    email:          'james@example.com',
    accountDetails: {
        address: {
            province: "YT"
        }
    }
};

var bannerSrc = getUserBanner(user)
        .orElse('/assets/banners/default-banner.jpg');
    
var bannerEl = Maybe.of({ src: null }});

bannerEl.map(applyBanner);


// function getUserBanner(banners, user) {
//     return banners[user.accountDetails.address.province];
// }

// var getUserBanner = R.compose(
//     R.prop(R.__, banners),
//     R.path(['accountDetails', 'address', 'province'])
// );

// function getUserBanner(banners, user) {
//     return Maybe.of(user)
//         .map(prop('accountDetails'))
//         .map(prop('address'))
//         .map(prop('province'))
//         .map(prop(R.__, banners));
// }

var applyBanner = R.curry(function(el, banner) {
    el.src = banner;
    return el;
});

function getUserBanner(user) {
    return Maybe.of(user)
        .map(R.path(['accountDetails', 'address', 'province']))
        .chain(getProvinceBanner);
}

function getProvinceBanner(province) {
    return Maybe.of(banners[province]);
};
