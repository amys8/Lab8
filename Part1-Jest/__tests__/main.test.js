const formatVolumeIconPath = require('../assets/scripts/formatVolumeIconPath');

describe('Volume icon level is ', () => {
    test('3', () => {
        expect(formatVolumeIconPath(69).toContain("3"));
    });
    test('2', () => {
        expect(formatVolumeIconPath(40).toContain("3"));
    });
    test('1', () => {
        expect(formatVolumeIconPath(8).toContain("3"));
    });
    test('0', () => {
        expect(formatVolumeIconPath(0).toContain("3"));
    });
});