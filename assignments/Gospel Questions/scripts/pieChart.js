function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color )
{
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

function create_pieChart(id,my_legend,hits,errors)
{
let myCanvas = document.getElementById(id);
myCanvas.width = 200;
myCanvas.height = 200;

let hit1 = hits + ' Hits';
let err1 = errors + ' Errors';

let ctx = myCanvas.getContext("2d");
let results = 
{
	[hit1]: hits,
	[err1]: errors
};

let Piechart = function(options)
{
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
 
    this.draw = function()
	{
        let total_value = 0;
        let color_index = 0;
        for (let categ in this.options.data){
            let val = this.options.data[categ];
            total_value += val;
        }
 
        let start_angle = 0;
        for (categ in this.options.data)
        {
            val = this.options.data[categ];
            let slice_angle = 2 * Math.PI * val / total_value;
 
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min(this.canvas.width/2,this.canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length]
            );
 
            start_angle += slice_angle;
            color_index++;
        }
 
		start_angle = 0;
		for (categ in this.options.data)
		{
			val = this.options.data[categ];
			slice_angle = 2 * Math.PI * val / total_value;
			let pieRadius = Math.min(this.canvas.width/2,this.canvas.height/2);
			let labelX = this.canvas.width/2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle/2);
			let labelY = this.canvas.height/2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle/2);
			let labelText = Math.round(100 * val / total_value);
			this.ctx.fillStyle = "white";
			this.ctx.font = "bold 20px Arial";
            if (labelText == 0)
            {
                this.ctx.fillText("", labelX,labelY);
            }
            else
            {
                this.ctx.fillText(labelText+"%", labelX,labelY);
            }            
			start_angle += slice_angle;
		}
     }

	 if (this.options.legend)
	 {
		color_index = 0;
		let legendHTML = "";
		for (categ in this.options.data)
		{
			legendHTML += "<br><div id='legend1'><span style='display:inline-block;width:18px;background-color:"+this.colors[color_index++]+";'>&nbsp;</span> "+categ+"</div>";
		}
		this.options.legend.innerHTML = legendHTML;
	 } 
}

let myLegend = document.getElementById(my_legend);

let myPiechart = new Piechart
(
{
        canvas:myCanvas,
        data:results,
        colors:["blue","red"],
        legend:myLegend
}
);
myPiechart.draw();
}