//
//  BulkAvatarTraits.unit,.test.js
//
//  Created by David Rowe on 28 Nov 2021.
//  Copyright 2021 Vircadia contributors.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

import BulkAvatarTraits from "../../../../src/domain/networking/packets/BulkAvatarTraits";


describe("BulkAvatarTraits - unit tests", () => {

    /* eslint-disable @typescript-eslint/no-magic-numbers */

    test("Can read a BulkAvatarTraits message", () => {
        // eslint-disable-next-line max-len
        const RECEIVED_MESSAGE = "0300000000000000c788830b8f1f46b293d0800e6dcbcfd000010000004900687474703a2f2f6374726c616c7473747564696f2e636f6d2f646f776e6c6f6164732f76697263616469612f617661746172732f726f626f742d30312f726f626f742d30312e66737401010000002005c644d34204f27f3f2a790100000402000000000000bfffbfff3fffcc0c0000ffff04000502000000000000bfffbfff3fffcc0c0100ffff09000402000000000000bfffbfff3fffcc0c0200ffff0d000402000000000000bfffbfff3fffcc0c0300ffff11000602000000000000bfffbfff3fffcc0c0400ffff17000402000000000000bfffbfff3fffcc0c0500ffff1b000402000000000000bfffbfff3fffcc0c0600ffff1f000902000000000000bfffbfff3fffcc0c0700ffff2800040200000022a8fcbfffbfff3fffcc080800ffff2c000400000000402b00bfffbfff3ff7cc0c0900ffff30000a0148fb6bfcdbff3ffebff23e4dcc0c0a0009003a00080100008d1c00004017c2ff41e6cc0c0b000a004200090100008f19000043439656400ccc0c0c000b004b000c0100000f0b00004390802c3f24cc0c0d000c0057000c0100006b0400004390802c3f24cc0c0e000d0063000901b8046bfce5ff4000c00141b4cc0c0f0009006c00070100008d1c00003fe6c2ff3e1bcc0c10000f00730008010000901900003cc0964c3ff4cc0c110010007b000b010000110b00003c6e802c40d8cc0c1200110086000b0100006c0400003c6e802c40d8cc0c1300120091000501000075063dffc553bfff3fffcc0c1400090096000601000096070000c553bfff3fffcc0c150014009c0006010000ac080000c553bfff3fffcc0c16001500a2000d015ffcf308ebff116ae5de1519cc0c17001600af000801f0ff2404d2ff9559eaa51048cc0c18001700b7000c010000e40d00009576ea88102ecc0c19001800c30009010000580900009580ea7e1025cc0c1a001900cc000f0100005b070000158dea71101acc0c1b001a00db000f0100002901000096f9ebb0141dcc0c1c001b00ea000f01dfff0202390094e9e884198dcc0c1d001c00f9000f019cff9401420094e9e884198dcc0c1e001d0008010c01a103f308e5ff6e67e6016ac5cc0c1f0016001401070117003d04cdff956395636fbfcc0c20001f001b010b010000980d00006a7eea7e6fd9cc0c210020002601080100006a0900006a7dea7d6fdacc0c220021002e010e0100002907000095ab95586fc3cc0c230022003c010e0100004501000097f6933b6c66cc0c240023004a010e010e00e9013d009939930f6629cc0c2500240058010e014300a80173009939930f6629cc0c26002500660104010000c1090000bfffbfff3fffcc0c270016006a010401000027056501bfffbfff3fffcc0c280027006e010b0100004d0a4b04bfffbfff3fffcc0c29002800666163656d6f757468526579654c657965736869656c6468616972746f70316865616470686f6e65626f647948697073526967687455704c656752696768744c65675269676874466f6f745269676874546f65426173655269676874546f655f456e644c65667455704c65674c6566744c65674c656674466f6f744c656674546f65426173654c656674546f655f456e645370696e655370696e65315370696e6532526967687453686f756c646572526967687441726d5269676874466f726541726d526967687448616e64526967687448616e64496e64657831526967687448616e64496e64657832526967687448616e64496e64657833526967687448616e64496e646578344c65667453686f756c6465724c65667441726d4c656674466f726541726d4c65667448616e644c65667448616e64496e646578314c65667448616e64496e646578324c65667448616e64496e646578334c65667448616e64496e646578344e65636b4865616448656164546f705f456e64ff";

        const MESSAGE_START = 0;

        const arrayBuffer = new ArrayBuffer(RECEIVED_MESSAGE.length / 2);
        const uint8Array = new Uint8Array(arrayBuffer);
        for (let i = 0, length = arrayBuffer.byteLength; i < length; i++) {
            uint8Array[i] = Number.parseInt(RECEIVED_MESSAGE.substr(i * 2, 2), 16);
        }
        const dataView = new DataView(arrayBuffer, MESSAGE_START);

        const bulkAvatarTraitsDetails = BulkAvatarTraits.read(dataView);
        expect(bulkAvatarTraitsDetails.traitSequenceNumber).toBe(3n);

        // WEBRTC TODO: Test reading of further data.

    });

    /* eslint-enable @typescript-eslint/no-magic-numbers */

});
