//
//  LineEntityItem.ts
//
//  Created by Julien Merzoug on 15 Jul 2022.
//  Copyright 2022 Vircadia contributors.
//  Copyright 2022 DigiSomni LLC.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

import UDT from "../networking/udt/UDT";
import PropertyFlags from "../shared/PropertyFlags";
import { EntityPropertyFlags } from "./EntityPropertyFlags";


// WEBRTC TODO: Replace Record<string, never> with LineEntityProperties.
type LineEntitySubclassData = {
    bytesRead: number;
    properties: Record<string, never>;
};


class LineEntityItem {
    // C++  class LineEntityItem : public EntityItem

    static readEntitySubclassDataFromBuffer(data: DataView, position: number, propertyFlags: PropertyFlags): LineEntitySubclassData { // eslint-disable-line class-methods-use-this, max-len
        // C++  int LineEntityItem::readEntitySubclassDataFromBuffer(const unsigned char* data, int bytesLeftToRead,
        //      ReadBitstreamToTreeParams& args, EntityPropertyFlags& propertyFlags, bool overwriteLocalData,
        //      bool& somethingChanged)

        /* eslint-disable @typescript-eslint/no-magic-numbers */

        let dataPosition = position;

        if (propertyFlags.getHasProperty(EntityPropertyFlags.PROP_COLOR)) {
            // WEBRTC TODO: Read color property.
            dataPosition += 3;
        }

        if (propertyFlags.getHasProperty(EntityPropertyFlags.PROP_LINE_POINTS)) {
            const length = data.getUint16(dataPosition, UDT.LITTLE_ENDIAN);
            dataPosition += 2;

            if (length > 0) {
                // WEBRTC TODO: Read linePoints property.
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

export default LineEntityItem;
export type { LineEntitySubclassData };
