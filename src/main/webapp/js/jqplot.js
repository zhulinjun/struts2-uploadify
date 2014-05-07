$(document).ready(function() {
			options = {
				seriesColors : [ "#4bb2c5", "#c5b47f", "#EAA228", "#579575",
						"#839557", "#958c12", "#953579", "#4b5de4", "#d8b83f",
						"#ff5800", "#0085cc" ], // Ĭ����ʾ�ķ�����ɫ��
				// �����������������������ɫ��������Ӹö����е�һ��λ�ÿ�ʼ����ȡֵ������Ӧ�ķ���
				stackSeries : false, // �����Ϊtrue�����ж�����ࣨ���������ͼ���ͱ������һ�����ߣ���
				// ��ôÿ�����ࣨ���ߣ��������ϵ�ֵΪ��ǰ���з�������ֵ�ܺ�������
				// ��ֵ���ֵ��eg,��ǰ��������ֵΪY3
				// ����ǰ��Y2,Y1����ô����ʾ��Y����ֵΪY2+Y3+Y1,Ŀǰ������֧����ͼ����״ͼ
				title : '', // ���õ�ǰͼ�ı���
				title : 
				{
					text : '', // ���õ�ǰͼ�ı���
					show : true// ���õ�ǰ�����Ƿ���ʾ
				},
				axisDefaults : 
				{
					show : false, // wether or not to renderer the axis.Determined automatically.
					min : null, // �ᣨ�ݣ�������ʾ����Сֵ
					max : null, // �ᣨ�ݣ�������ʾ�����ֵ
					pad : 1.2, // һ��������ӣ�// �������ںᣨ�ݣ��������ֵ-�����ںᣨ�ݣ�������Сֵ��*padֵ=������ʾ�ĺᣨ�ݣ��������䳤��
					// ������ʾ�ĺᣨ�ݣ��������䳤��=�ᣨ�ݣ�������ʾ�����ֵ-�ᣨ�ݣ�������ʾ����Сֵ
					// ���������max��min��ֵ�Ļ�����ô�����ȿ���min��max���õ�ֵ
					ticks : [], // ���úᣨ�ݣ�����Ŀ̶��ϵ�ֵ����Ϊ��ticks�����е�ֵ��
					// a 1D [val1, val2, ...], or 2D [[val, label], [val,
					numberTicks : undefined, // һ��������ӣ��������úᣨ�ݣ�����̶ȼ��// �ᣨ�ݣ�����̶ȼ��ֵ=�ᣨ�ݣ��������䳤��/(numberTicks-1)
					tickInterval : '', // �ᣨ�ݣ�����̶ȼ��ֵ����Ϊ�����ַ���
					renderer : $.jqplot.LinearAxisRenderer, // ���úᣨ�ݣ��������ݼ��ص���Ⱦ��,��dateAxisRenderer���μ����������ؽ��ܣ�
					rendererOptions : {}, // ����renderer��Option���ö�����״ͼ����Ҫ����
					// ��ͬͼ���Option���ö�����μ����桶jqPlot������ͬ�����Option�������á�
					
					// �и���ͼ�������Option����
					tickOptions : 
					{
						mark : 'outside', // ���úᣨ�ݣ�����̶�������������ʾ��ʽ����Ϊ�������ڣ��⣬������������ʾ// ֵҲ��Ϊ��'outside', 'inside' �� 'cross',
						showMark : true, // �����Ƿ���ʾ�̶�
						showGridLine : true, // �Ƿ���ͼ��������ʾ�̶�ֵ�����������
						markSize : 4, // ÿ���̶��߶����̶������������ϵ���루����Ϊ��λ��// ���markֵΪ 'cross', ��ôÿ���̶��߶����϶�����¶��㣬�̶�����������// �ڿ̶����м佻�棬��ô��ʱ��������2,
						show : true, // �Ƿ���ʾ�̶��ߣ���̶���ͬ����������ߣ��Լ��������ϵĿ̶�ֵ
						showLabel : true, // �Ƿ���ʾ�̶����Լ��������ϵĿ̶�ֵ
						formatString : '', // �����������Ͽ̶�ֵ��ʾ��ʽ��eg:'%b %#d,// %Y'��ʾ��ʽ"�� �գ���"��"AUG 30,2008"
						fontSize : '10px', // �̶�ֵ�������С
						fontFamily : 'Tahoma', // �̶�ֵ������
						angle : 40, // �̶�ֵ��������нǣ��Ƕ�Ϊ����������˳ʱ�뷽��
						fontWeight : 'normal', // ����Ĵ�ϸ
						fontStretch : 1// �̶�ֵ�����ڷ����������⣩�ϵ���չ(����)��
					},
					showTicks : true, // / �Ƿ���ʾ�̶����Լ��������ϵĿ̶�ֵ
					showTickMarks : true, // �����Ƿ���ʾ�̶�
					useSeriesColor : true// ����ж���ݣ��ᣩ�����ᣬͨ��������������Щ�������Ƿ��Բ�ͬ��ɫ��ʾ
				},

				axes : 
				{
					xaxis : 
					{
						// ����ͬ axisDefaults
					},
					yaxis : 
					{
						// ����ͬ axisDefaults
					},
					x2axis :
					{
						// ����ͬ axisDefaults
					},
					y2axis :
					{
						// ����ͬ axisDefaults
					}
				},
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				seriesDefaults : 
				{ // ����ж�����࣬���ͨ���������������ø�������Ĺ�������
					show : true, // �����Ƿ���Ⱦ����ͼ�����򣨼���ʾͼ�������ݣ�
					xaxis : 'xaxis', // either 'xaxis' or 'x2axis'.
					yaxis : 'yaxis', // either 'yaxis' or 'y2axis'.
					label : '', // ������ʾ�ڷ������ƿ��еķ�������
					color : '', // ������ͼ���б�ʾ�����֣���״ͼ�ȣ�����ɫ
					lineWidth : 2.5, // ����ͼ���ر�������ͼ���Ŀ��
					shadow : true, // ��ͼ��ͼ�����Ƿ���ʾ��Ӱ����
					shadowAngle : 45, // �ο�grid����ͬ����
					shadowOffset : 1.25, // �ο�grid����ͬ����
					shadowDepth : 3, // �ο�grid����ͬ����
					shadowAlpha : 0.1, // �ο�grid����ͬ����
					showLine : true, // �Ƿ���ʾͼ���е����ߣ�����ͼ�е����ߣ�
					showMarker : true, // �Ƿ�ǿ����ʾͼ�е����ݽڵ�
					fill : false, // �Ƿ����ͼ����������������������ɫͬ������ɫ���Լ�legend
					// ���õķ������ƿ��з������ɫ���˴�ע��������fillΪtrue�� ��ôshowLine����Ϊtrue�����򲻻���ʾЧ��
					fillAndStroke : false, // ��fillΪtrue��״̬�£������������������ʾһ���ߣ����������ͼ����ʾ�����ߣ�
					fillColor : undefined, // ��������������ɫ
					fillAlpha : undefined, // ������������͸����
					renderer : $.jqplot.PieRenderer, // ������Ⱦ�������������ñ�ͼPieRenderer����Ⱦ����ͼ��
					// ���Ӷ�ת��������ͼ��
					rendererOptions : {}, // �����ϸ�������������Ⱦ����option������״ͼ����Ⱦ��û��option����
					// ��ͬͼ���Option���ö�����μ����桶jqPlot������ͬ�����Option�������á�
					// �и���ͼ�������Option����
					markerRenderer : $.jqplot.MarkerRenderer, // renderer to// use to draw// the data
					// point markers.
					markerOptions : 
					{
						show : true, // �Ƿ���ͼ����ʾ���ݵ�
						style : 'filledCircle', // �������ݵ���ͼ����ʾ�ķ�ʽ��Ĭ����"filledCircle"(ʵ��Բ��),
						// �������ַ�ʽcircle��diamond, square, filledCircle��
						// filledDiamond or filledSquare.
						lineWidth : 2, // ���ݵ�����ıߵĿ�ȣ�������ù��󣬸����߻��ظ�������ʾ��������ʵ�ĵ㣩
						size : 9, // ���ݵ�Ĵ�С
						color : "#666666", // ���ݵ����ɫ
						shadow : true, // �Ƿ�Ϊ���ݵ���ʾ��Ӱ������������Ч����
						shadowAngle : 45, // ��Ӱ���Ƕȣ�x��˳ʱ�뷽��
						shadowOffset : 1, // �ο�grid����ͬ����
						shadowDepth : 3, // �ο�grid����ͬ����
						shadowAlpha : 0.07// �ο�grid����ͬ����
					},
					isDragable : true// �Ƿ������϶������dragable�������룩,Ĭ�Ͽ��϶�
				},
				
				series : 
				[// ����ж��������Ҫ��ʾ�����ڴ˴����ø�������������������
				// eg.���ø��������ڷ������ƿ��еķ�������
				// [label: 'Traps Division'},{label: 'Decoy Division'},{label:
				// 'Harmony Division'}]
				// ���ò�������ͬseriesDefaults
				],

				legend : 
				{
					show : false,// �����Ƿ���ַ������ƿ򣨼����з�������Ƴ�����ͼ��ĳ��λ�ã�
					location : 'ne', // �������ƿ����λ��, nw, n, ne, e, se, s, sw, w.
					xoffset : 12, // �������ƿ��ͼ�������ϱ߿�ľ��루��λpx��
					yoffset : 12, // �������ƿ��ͼ��������߿�ľ���(��λpx)
					background : '', // �������ƿ��ͼ�����򱳾�ɫ
					textColor : '' // �������ƿ��ͼ��������������ɫ
				},

				grid : 
				{
					drawGridLines : true, // wether to draw lines across the  grid or not.
					gridLineColor : '#cccccc', // ��������ͼ���������񱳾��ߵ���ɫ
					background : '#fffdf6', // ��������ͼ������ı���ɫ
					borderColor : '#999999', // ����ͼ���(�����)�߿����ɫ
					borderWidth : 2.0, // ����ͼ��ģ�����ࣩ�߿���
					shadow : true, // Ϊ����ͼ�꣨����ࣩ�߿�������Ӱ����ͻ��������Ч��
					shadowAngle : 45, // ������Ӱ����ĽǶȣ���x��˳ʱ�뷽����ת
					shadowOffset : 1.5, // ������Ӱ����ƫ�Ƴ�ͼƬ�߿�ľ���
					shadowWidth : 3, // ������Ӱ����Ŀ��
					shadowDepth : 3, // ����Ӱ�������ص���Ӱ������
					shadowAlpha : 0.07, // ������Ӱ�����͸����
					renderer : $.jqplot.CanvasGridRenderer, // renderer to use to draw the grid.
					rendererOptions : {}
				},

				/** **********************jqPlot������ͬ�����Option��������***************************** */

				// BarRenderer�����á���״ͼ����Option����
				// ��Option������������״ͼ��series��seriesDefault���Ե�������ö�������
				seriesDefaults : 
				{
					rendererOptions : 
					{
						barPadding : 8, // ����ͬһ����������״��֮��ľ��루px��
						barMargin : 10, // ���ò�ͬ�����������״��֮��ľ��루px����ͬһ�����������ϣ�
						barDirection : 'vertical', // ������״ͼ��ʾ�ķ��򣺴�ֱ��ʾ��ˮƽ��ʾ Ĭ�ϴ�ֱ��ʾ vertical or horizontal.
						barWidth : null, // ������״ͼ��ÿ����״���Ŀ��
						shadowOffset : 2, // ͬgrid��ͬ��������
						shadowDepth : 5, // ͬgrid��ͬ��������
						shadowAlpha : 0.8 // ͬgrid��ͬ��������
					}
				},

				// Cursor(���)
				// ����ƶ���ͼ��ʱ�������ͼ����ʾ��ʽ������͸�������ͬʱʹ��
				// ���⣬ͨ�����ø����Ե�zoom�����������ͼ��ĳ��������ȡ����ѡ������Ŵ�
				// �����ö���ֱ����option������
				cursor : 
				{
					style : 'crosshair', // ������ƶ���ͼƬ��ʱ��������ʾ��ʽ��������ֵΪcss��
					show : true, // �Ƿ���ʾ���
					showTooltip : true, // �Ƿ���ʾ��ʾ��Ϣ��
					followMouse : false, // ������ʾ��Ϣ���Ƿ����꣨��꣩һ���ƶ�
					tooltipLocation : 'se', // �����ʾ��Ϣ����λ�����á����followMouse=true,��ô��λ��Ϊ
					// ��ʾ��Ϣ������ڹ���λ�á�����Ϊ�����ʾ��Ϣ����ͼ���е�λ��
					// �����Կ�ѡֵ�� n, ne, e, se, etc.
					tooltipOffset : 6, // ��ʾ��Ϣ�������(followMouse=true)�������ᣨfollowMouse=false����λ��
					showTooltipGridPosition : false,// �Ƿ�����Ϣ��ʾ������ʾ���λ�ã�ȡ���ͼ������ϱ�Ե�����ؾ��룩
					showTooltipUnitPosition : true,// �Ƿ���ʾ��ʾ�������λ�ã�ȡ���ں�����������ֵ������Ϣ��
					// ע��ע��˴���showTooltipGridPositionֵ����ǰ����ʾ����ֵ���ô���ʾ��������ֵ
					tooltipFormatString : '%.4P', // ͬHighlighter��tooltipFormatString
					useAxesFormatters : true, // ͬHighlighter��tooltipFormatString
					tooltipAxesGroups : []// show only specified axes groups
				},

				// Dragable���϶���
				// �����ö���ͨ��seriesDefaults��series���ö����������
				seriesDefaults : 
				{
					dragable :
					{
						color : undefined, // ���϶����ݵ��ǣ��϶������϶����ݵ���ɫ
						constrainTo : 'none'// �����϶��ĵķ�Χ: 'x'��ֻ���ں������϶���,
					// 'y'��ֻ�����������϶���, or 'none'�������ƣ�.
					}
				},
				// Highlighter��������
				// ���ø�������option���Զ���
				// ����ƶ���ĳ�����ݵ���ʱ�������ݵ�������ʾ��ʾ��Ϣ��
				// �����ö���ֱ����option������
				highlighter :
				{
					lineWidthAdjust : 2.5, // ������ƶ����Ŵ�����ݵ���ʱ��������������ݵ�Ŀ��
					// Ŀǰ�������ڷ�ʵ�����ݵ�
					sizeAdjust : 5, // ������ƶ������ݵ���ʱ�����ݵ��������������
					showTooltip : true, // �Ƿ���ʾ��ʾ��Ϣ��
					tooltipLocation : 'nw', // ��ʾ��Ϣ��ʾλ�ã�Ӣ�ķ������д��ĸ��: n, ne, e,se, s, sw, w, nw.
					fadeTooltip : true, // ������ʾ��Ϣ�����ֺ���ʧ�ķ�ʽ���Ƿ��뵭����
					tooltipFadeSpeed : "fast",// ������ʾ��Ϣ�����뵭�����ٶȣ� slow, def,fast, ������һ����������ֵ.
					tooltipOffset : 2, // ��ʾ��Ϣ���ݱ�������ʾ�����ݵ��ƫ��λ�ã������ؼơ�
					tooltipAxes : 'both', // ��ʾ��Ϣ����ʾ���ݵ��Ǹ��������ϵ�ֵ��Ŀǰ�к�/��/�������ַ�ʽ��
					// ֵ�ֱ�Ϊ x, y or xy.
					tooltipSeparator : '',// ��ʾ��Ϣ����ֵ֮ͬ��ļ������
					useAxesFormatters : true, // ��ʾ��Ϣ����������ʾ�ĸ�ʽ�Ƿ�͸�����������������ʾ��ʽһ��
					tooltipFormatString : '%.5P' // ����������ʾ��Ϣ����������ʾ�ĸ�ʽ��ǰ��������useAxesFormatters
					// Ϊfalse. ��ʱ��Ϣ��ʾ�������ݸ�ʽ������������һ�£������Դ�Ϊ׼
				},

				// LogAxisRenderer(ָ����Ⱦ��)
				// ����Ⱦ��ֻ���������ԣ� ָ����Ⱦ��ͨ��axesDefaults��axes���ö����������
				axesDefaults :
				{
					base : 10, // ָ���ĵ���
					tickDistribution : 'even'// ��������ʾ��ʽ��'even' or 'power'.
												// 'even' �������Ǿ��ȷֲ�������
												// ���ϵ�����̶�ֵ ����'power' ���Ǹ��ݲ��������������ȷ���������ϵĿ̶�
				},

				// PieRenderer(���á���״ͼ����OPtion����)
				// ��״ͼͨ��seriesDefaults��series���ö����������
				seriesDefaults :
				{
					rendererOptions : {
						diameter : undefined, // ���ñ���ֱ��
						padding : 20, // ��������������ƿ����ͼ��߿�ľ��룬����ñ����ֱ��
						sliceMargin : 20, // ����ÿ������֮��ľ���
						fill : true, // ���ñ���ÿ���ֱ�����״̬
						shadow : true, // Ϊ����ÿ�����ֵı߿�������Ӱ����ͻ��������Ч��
						shadowOffset : 2, // ������Ӱ����ƫ�Ƴ�����ÿ���ֱ߿�ľ���
						shadowDepth : 5, // ������Ӱ��������
						shadowAlpha : 0.07// ������Ӱ�����͸����
					}
				},

				// pointLabels(���ݵ��ǩ)
				// ���������ݵ�����λ����ʾ�����Ϣ������ʾ�����ʣ�
				seriesDefaults :
				{
					pointLabels :
					{
						location : 's',// ���ݱ�ǩ��ʾ�����ݵ㸽���ķ�λ
						ypadding : 2// ���ݱ�ǩ�����ݵ������᷽���ϵľ���
					}
				},

				// Trendline���������ߡ���
				// ��״ͼͨ��seriesDefaults��series���ö����������
				seriesDefaults :
				{
					trendline :
					{
						show : true, // �Ƿ���ʾ������
						color : '#666666', // ��������ɫ
						label : '', // ����������
						type : 'linear', // ����������'linear'��ֱ�ߣ�,
												// 'exponential'����ֵ���ߣ� or 'exp'
						shadow : true, // ͬgrid��ͬ��������
						lineWidth : 1.5, // �����߿��
						shadowAngle : 45, // ͬgrid��ͬ��������
						shadowOffset : 1.5, // ͬgrid��ͬ��������
						shadowDepth : 3, // ͬgrid��ͬ��������
						shadowAlpha : 0.07
						// ͬgrid��ͬ��������
					 }
				  }
		}
});