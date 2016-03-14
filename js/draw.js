/**
 * Created by Administrator on 14-8-23.
 */


function SvgBrush() {
    this.svgns = 'http://www.w3.org/2000/svg';
    this.doc = null;
    this.init = function() {
        if (window.svgDocument) {
            this.doc = window.svgDocument;
        }
    }
}

/**
 * 画折线
 * @param points：折线的点
 * @param styleObj:样式对象
 */
SvgBrush.prototype.drawPolyLine = function(points, styleObj) {
    var shape = this.doc.createElementNS(this.svgns, "line");
    var pointsStr = "";
    points.forEach(function(item, i) {
        pointsStr += item.x + "," + item.y + " ";
    });
    shape.setAttributeNS(null, "points", pointsStr);
    for (var o in styleObj) {
        shape.setAttributeNS(null, o, styleObj["o"]);
    }
    this.doc.appendChild(shape);
    console.log("drawPolyLine");
}


var svgBrush = new SvgBrush();