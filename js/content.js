"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        let tupleType: [string, number];
        
        tupleType = ['hey', 13];
        // tupleType = [5, 'hey']; // Error - '[number, string]' is not assignable to '[string, number]'
        // tupleType = ['hey', 'tuple']; // Error - '[string, string]' is not assignable to '[string, number]'
        
        tupleType[3] = 54; // this works well because union type string | number is used for indices outside of known ones
        tupleType[4] = 'test'; // works well because it can be string or number, union type
        // tupleType[5] = true; // Error - Type 'true' is not assignable to type 'string | number'
        
        console.log(tupleType);
        
        res.write("<a href='https://github.com/zolleialex/tuple' target='_blank'>" +
            "https://github.com/zolleialex/tuple</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map