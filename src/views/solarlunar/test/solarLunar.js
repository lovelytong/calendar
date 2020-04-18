var solarLunar = require('../src/solarLunar');
var solar2lunarData = solarLunar.solar2lunar(2015, 10, 2);// 转换为阴历
var solar2lunarData2 = solarLunar.solar2lunar(2015, 10, 8);// 转换为阴历
var lunar2solarData = solarLunar.lunar2solar(2015, 10, 2);// 转换为公历
var lunar2solarData2 = solarLunar.lunar2solar(2015, 8, 26);// 转换为公历

var should = require('should');

describe('should work', function () {
    describe('solar2lunar', function () {
        it('should have property solar2lunar', function () {
            solarLunar.should.have.property('solar2lunar');
        });
        it('lYear should equal 2015', function () {
            solar2lunarData.lYear.should.be.equal(2015)
        });
        it('lMonth should equal 8', function () {
            solar2lunarData.lMonth.should.be.equal(8)
        });
        it('lDay should equal 20', function () {
            solar2lunarData.lDay.should.be.equal(20)
        });
        it('animal should equal 羊', function () {
            solar2lunarData.animal.should.be.equal('羊')
        });
        it('monthCn should equal 八月', function () {
            solar2lunarData.monthCn.should.be.equal('八月')
        });
        it('dayCn should equal 二十', function () {
            solar2lunarData.dayCn.should.be.equal('二十')
        });
        it('gzYear should equal 乙未', function () {
            solar2lunarData.gzYear.should.be.equal('乙未')
        });
        it('gzMonth should equal 乙酉', function () {
            solar2lunarData.gzMonth.should.be.equal('乙酉')
        });
        it('gzDay should equal 辛亥', function () {
            solar2lunarData.gzDay.should.be.equal('辛亥')
        });
        it('isToday should equal false', function () {
            solar2lunarData.isToday.should.be.false()
        });
        it('isLeap should equal false', function () {
            solar2lunarData.isLeap.should.be.false()
        });
        it('nWeek should equal 5', function () {
            solar2lunarData.nWeek.should.be.equal(5)
        });
        it('ncWeek should equal 星期五', function () {
            solar2lunarData.ncWeek.should.be.equal('星期五')
        });
        it('isTerm should equal false', function () {
            solar2lunarData.isTerm.should.be.false()
        });
        it('term should equal empty string', function () {
            should(solar2lunarData.term).be.exactly('')
        });
    });

    describe('solar2lunar that has term',function(){
        it('isTerm should be true',function(){
            should(solar2lunarData2.isTerm).be.true();
        });
        it('term should not be null',function(){
            should(solar2lunarData2.term).not.be.null();
        });
        it('term should equal 寒露',function(){
            should(solar2lunarData2.term).be.equal('寒露');
        });
    });

    describe('lunar2solar', function () {
        it('should have property lunar2solar', function () {
            solarLunar.should.have.property('lunar2solar');
        });
        it('lYear should equal 2015', function () {
            lunar2solarData.lYear.should.be.equal(2015)
        });
        it('lMonth should equal 10', function () {
            lunar2solarData.lMonth.should.be.equal(10)
        });
        it('lDay should equal 2', function () {
            lunar2solarData.lDay.should.be.equal(2)
        });
        it('animal should equal 羊', function () {
            lunar2solarData.animal.should.be.equal('羊')
        });
        it('monthCn should equal 十月', function () {
            lunar2solarData.monthCn.should.be.equal('十月')
        });
        it('dayCn should equal 初二', function () {
            lunar2solarData.dayCn.should.be.equal('初二')
        });
        it('gzYear should equal 乙未', function () {
            lunar2solarData.gzYear.should.be.equal('乙未')
        });
        it('gzMonth should equal 丁亥', function () {
            lunar2solarData.gzMonth.should.be.equal('丁亥')
        });
        it('gzDay should equal 癸巳', function () {
            lunar2solarData.gzDay.should.be.equal('癸巳')
        });
        it('isToday should equal false', function () {
            lunar2solarData.isToday.should.be.false()
        });
        it('isLeap should equal false', function () {
            lunar2solarData.isLeap.should.be.false()
        });
        it('nWeek should equal 5', function () {
            lunar2solarData.nWeek.should.be.equal(5)
        });
        it('ncWeek should equal 星期五', function () {
            lunar2solarData.ncWeek.should.be.equal('星期五')
        });
        it('isTerm should equal false', function () {
            lunar2solarData.isTerm.should.be.false()
        });
        it('term should equal empty string', function () {
            should(lunar2solarData.term).be.exactly('')
        });
    });

    describe('lunar2solar that has term',function(){
        it('isTerm should be true',function(){
            should(lunar2solarData2.isTerm).be.true();
        });
        it('term should not be null',function(){
            should(lunar2solarData2.term).not.be.null();
        });
        it('term should equal 寒露',function(){
            should(lunar2solarData2.term).be.equal('寒露');
        });
    });
});