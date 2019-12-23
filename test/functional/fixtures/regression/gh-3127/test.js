describe('[Regression](GH-3127, GH-2741) Should download files', function () {
    it('JSON', function () {
        return runTests('testcafe-fixtures/index-test.js', 'JSON', { only: ['edge-chromium', 'firefox'] });
    });

    it('Download ZIP', function () {
        return runTests('testcafe-fixtures/index-test.js', 'ZIP', { only: ['edge-chromium', 'firefox'] });
    });

    it('Download PDF', function () {
        return runTests('testcafe-fixtures/index-test.js', 'PDF', { only: ['firefox', 'edge-chromium'] });
    });
});