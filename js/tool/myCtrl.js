/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/6/29
 * Time: 下午4:22
 */
app.directive('newDir', function() {
    return {
        restrict: 'A',
//            template: "hello world",
        templateUrl: "./note.html"
    }
})