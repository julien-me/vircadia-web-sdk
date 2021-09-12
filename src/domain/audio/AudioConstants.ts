//
//  AudioConstants.ts
//
//  Created by David Rowe on 11 Sep 2021.
//  Copyright 2021 Vircadia contributors.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

/*@devdoc
 *  The <code>AudioConstants</code> namespace provides the values of audio constants used in the SDK.
 *  <p>C++: <code>PingType</code></p>
 *
 *  @namespace AudioConstants
 *
 *  @property {number} NETWORK_FRAME_SAMPLES_STEREO - <code>480</code> - The number of samples in a network packet for a stereo
 *      channel.
 *  @property {number} NETWORK_FRAME_SAMPLES_PER_CHANNEL - <code>240</code> - The number of samples in a network packet for a
 *      mono channel.
 */
const AudioConstants = new class {
    // C++  AudioConstants

    readonly NETWORK_FRAME_SAMPLES_STEREO = 480;
    readonly NETWORK_FRAME_SAMPLES_PER_CHANNEL = 240;

}();

export { AudioConstants as default };
