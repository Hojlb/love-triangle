/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
        let count = 0;
        for(let i = 0; i < preferences.length; i++){
            let a = i+1;
            let b = preferences[ a - 1 ];
            let c = preferences[ b - 1 ];
            let d = preferences[ c - 1 ];

        if( d===a && b !==c ) count ++;
        };

        return count/3;

    };
