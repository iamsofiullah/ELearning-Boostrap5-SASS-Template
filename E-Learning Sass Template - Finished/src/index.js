// Import all plugins
import * as bootstrap from 'bootstrap';

import Scrollbar from 'smooth-scrollbar';

const options = {
    'damping': 0.06,
    'alwaysShowTracks': true
};

Scrollbar.init(document.querySelector('#my-scroll'), options);