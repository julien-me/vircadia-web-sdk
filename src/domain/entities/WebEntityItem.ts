//
//  WebEntityItem.ts
//
//  Created by Julien Merzoug on 14 Jul 2022.
//  Copyright 2022 Vircadia contributors.
//  Copyright 2022 DigiSomni LLC.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

import UDT from "../networking/udt/UDT";
import PropertyFlags from "../shared/PropertyFlags";
import { EntityPropertyFlags } from "./EntityPropertyFlags";


// WEBRTC TODO: Replace Record<string, never> with WebEntityProperties.
type WebEntitySubclassData = {
    bytesRead: number;
    properties: Record<string, never>;
};


class WebEntityItem {
    // C++  class WebEntityItem : public EntityItem

    // eslint-disable-next-line max-len
    static readEntitySubclassDataFromBuffer(data: DataView, position: number, propertyFlags: PropertyFlags): WebEntitySubclassData { // eslint-disable-line class-methods-use-this
        // C++  int WebEntityItem::readEntitySubclassDataFromBuffer(const unsigned char* data, int bytesLeftToRead,
        //      ReadBitstreamToTreeParams& args, EntityPropertyFlags& propertyFlags, bool overwriteLocalData,
        //      bool& somethingChanged)

        /* eslint-disable @typescript-eslint/no-magic-numbers */

        let dataPosition = position;

        if (propertyFlags.getHasProperty(EntityPropertyFlags.PROP_COLOR)) {
            // WEBRTC TODO: Read color property.
            dataPosition += 3;
        }

        if (propertyFlags.getHasProperty(EntityPropertyFlags.PROP_ALPHA)) {
            // WEBRTC TODO: Read alpha property.
            dataPosition += 4;
        }

        // Skip over pulseMode. It is deprecated.
        dataPosition += 20;

        if (propertyFlags.getHasProperty(EntityPropertyFlags.PROP_SOURCE_URL)) {
            const length = data.getUint16(dataPosition, UDT.LITTLE_ENDIAN);
            dataPosition += 2;

            if (length > 0) {
                // WEBRTC TODO: Read sourceURL property.
                dataPosition += length;
            }
        }

        if (propertyFlags.getHasProperty(EntityPropertyFlags.PROP_DPI)) {
            // WEBRTC TODO: Read dpi property.
            dataPosition += 2;
        }

        if (propertyFlags.getHasProperty(EntityPropertyFlags.PROP_SCRIPT_URL)) {
            const length = data.getUint16(dataPosition, UDT.LITTLE_ENDIAN);
            dataPosition += 2;

            if (length > 0) {
                // WEBRTC TODO: Read scriptURL property.
                dataPosition += length;
            }
        }

        if (propertyFlags.getHasProperty(EntityPropertyFlags.PROP_MAX_FPS)) {
            // WEBRTC TODO: Read maxFPS property.
            dataPosition += 1;
        }

        if (propertyFlags.getHasProperty(EntityPropertyFlags.PROP_INPUT_MODE)) {
            // WEBRTC TODO: Read webInputMode property.
            dataPosition += 4;
        }

        if (propertyFlags.getHasProperty(EntityPropertyFlags.PROP_SHOW_KEYBOARD_FOCUS_HIGHLIGHT)) {
            // WEBRTC TODO: Read showKeyboardFocusHighlight property.
            dataPosition += 1;
        }

        if (propertyFlags.getHasProperty(EntityPropertyFlags.PROP_WEB_USE_BACKGROUND)) {
            // WEBRTC TODO: Read webUseBackground property.
            dataPosition += 1;
        }

        if (propertyFlags.getHasProperty(EntityPropertyFlags.PROP_USER_AGENT)) {
            const length = data.getUint16(dataPosition, UDT.LITTLE_ENDIAN);
            dataPosition += 2;

            if (length > 0) {
                // WEBRTC TODO: Read userAgent property.
                dataPosition += length;
            }
        }

        return {
            bytesRead: dataPosition - position,
            properties: {}
        };

        /* eslint-enable @typescript-eslint/no-magic-numbers */
    }

}

export default WebEntityItem;
export type { WebEntitySubclassData };
