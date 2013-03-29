define([
	{
		"section" : "入门指南/设置",
		"content" : [
			{
				"q" : "什么是触发类邮件？",
				"a" : "触发类邮件指的是被某一事件、行为、或者在特定时间触发的一封或一系列邮件，以及因为特定的原因而发送给特定收件人的邮件。如注册激活邮件、购物订单确认邮件等。"
			},{
				"q" : "触发类邮件能够给企业带来什么价值？",
				"a" : "随着网络和移动互联网的迅猛发展，触发类邮件变得对企业越来越重要。相对于一般的营销邮件来说，触发类邮件具有更高的打开率。因为当顾客采取了某个行动之后，比如注册了某个服务，购买了某件商品等，会期望从企业那里得到反馈，这个时候，企业发送的邮件更容易被用户查看。根据Borrel Associate.Inc和Merkle公司调查显示有64%的顾客认为触发类邮件对他们的来说价值很大。"
			},{
				"q" : "为什么不直接使用sendmail+posfix+courier搭建自己的邮件服务器来发送邮件？",
				"a" : "当然，你可以使用这种方式来搭建自己的邮件服务器，但在发送邮件的时候，有一件事是你必须要注意的，即，要避免你的邮件被误判为垃圾邮件。而要想达到这个目标，你需要做许多事情，比如，你需要拥有能够正确进行身份验证的基础设施，并且按照合适的步骤注册你的IP和域名；同时，为了获得良好的信誉度，你必须按照ESPs（邮件服务提供商）的规则来发送邮件，从而建立良好的邮件发送记录。而且，如果你需要接收、存储邮件，你必须完成一系列复杂的工作,包括维护好使用的软件，定时做好备份，处理硬件错误，及时打好安全补丁，进行实时监控等。如果你使用了SendCloud提供的服务，你可以将这些麻烦的问题统统交给我们，你只需要将邮件写好，简单的发送邮件就行。"
			},{
				"q" : "我能够通过浏览器登录我的SendCloud吗？",
				"a" : "你可以在任何一台接入Internet的电脑上方便的使用服务器登录到SendCloud，网址是：<a href='http://sendcloud.sohu.com' target='_blank'>http://sendcloud.sohu.com</a>"
			},{
				"q" : "我如何开始使用SendCloud服务？",
				"a" : "首先，创建一个SendCloud账户，如果您没有一个SendCloud账户，请先进入官网进行注册：<a href='http://sendcloud.sohu.com/v2/feature.jsp' target='_blank'>http://sendcloud.sohu.com/v2/feature.jsp</a> 注册成功后登录，需要首先完善您的资料。 资料填写完毕后，按照指南进行配置，便可使用SendCloud。"
			}
		]
	},{
		"section" : "邮件发送",
		"content" : [
			{
				"q" : "我应该使用SMTP API还是HTTP API？",
				"a" : "这完全取决于你自己，您可以选用任何一种你觉得更方便的方式。但一般来说，使用HTTP API会更好一些，首先，这种方式发送速度更快；其次，这种方式更易于使用——你无需处理MIME。"
			},{
				"q" : "如何将一封邮件发送给多个用户？",
				"a" : "当你通过SMTP发送邮件时，你可以指定多个收件人。同时，你可以调用SendCloud提供的API资源，使用我们的模板，实现针对不同收件人发送个性化的邮件，具体操作请参考用户手册。"
			},{
				"q" : "为什么我使用 Java Spring的默认设置链接并不成功？",
				"a" : "检查您之前的设置，举例：如果是msg.setFrom(\"sohu.com\") ,请改为msg.setFrom(\"service@sohu.com\")。前者在发往postfix的时候可以，但是发送给haraka（SendCloud使用haraka）的时候是不行的， 我们认为这是不正确的邮件地址。"
			},{
				"q" : "为什么我连接SendCloud的时候身份验证不成功？",
				"a" : "首先，请检查您的用户名与密码是否已开通，可通过登录网站进行验证，地址：<a href='http://sendcloud.sohu.com/v2/help.jsp' target='_blank'>http://sendcloud.sohu.com/v2/help.jsp</a> ，如果忘记密码，可通过用户名进行找回；其次，检查在程序中，您的密码是否输入正确，如果以上操作皆无误，可将您的联系方式以及用户名发往邮箱：aofan@sohu-inc.com，会有技术支持与您联系。"
			}
		]
	},{
		"section" : "邮件送达/信誉度",
		"content" : [
			{
				"q" : "当我刚开始使用SendCloud发送邮件时，我应该如何建立一个良好的信誉度？",
				"a" : "你可以简单将邮件信誉度想象成你的信用卡积分。当你还没发送任何邮件的时候，你不会有一个坏的信誉，当然，也没有好的信誉。这种情况下，没有ESP会允许你发送大数量的邮件到它们的邮件服务器中。这就像，在你还没毕业之前，是没有公司会给你高额度的信用卡的。要想建立良好的信誉度，你需要拥有良好的发送记录。我们为新用户制定了合适的算法，能够以满足ESP要求的速率来发送邮件，以此来逐渐累加你的信誉度。"
			},{
				"q" : "为什么我的发送配额这么低？",
				"a" : "每个SendCloud新账户都有一个基于用户发送量、用户注册时间的每日发送限额提升过程。此外，对新用户第一次使用SendCloud的当天，我们还设置了基于小时的发送限额变化。为了保护SendCloud和您的邮件发送不受垃圾邮件发送者和其他影响系统IP信誉度的用户的侵害，这种从较低发送限额开始的提升过程（我们简称为 warm up）是非常有必要的。"
			},{
				"q" : "新用户为何不能在短时间内快速地发送邮件？",
				"a" : "对于新用户，除了您在注册时填写的信息外，我们无法在短时间内了解有关您邮件发送的任何信息，所以，我们将所有新用户都默认为“未知信誉度”用户。因为未知，无法辨别您是优质信源，还是恶意信源，谨慎起见，我们给新用户一个较低的每小时发送限额，并以此开始，根据新用户的发件数量与质量来逐渐提升。一旦新用户开始发邮件（包括上线前的测试阶段），您的发送限额就会由系统进行自动调整。"
			},{
				"q" : "如果我的请求超过了限额？",
				"a" : "如果您发送的邮件超过了每小时或每天的发送限额，我们目前的作法是直接拒绝请求，直至下一个小时，再来接收请求。对于每小时发送配额，我们会实时监测到您发送量的增长，因此您的发送额度会有增长。需要说明的是，每小时发送限额与每天发送限额是根据您的发送情况自动计算和调整的。"
			},{
				"q" : "在哪里可以看到我的发送限额呢？",
				"a" : "使用您的账户与密码登陆官网：<a href='http://sendcloud.sohu.com/' target='_blank'>http://sendcloud.sohu.com/</a>在账户页面中，可看到相关数据反馈。"
			},{
				"q" : "为什么我的邮件发送效果低于其他用户所说的水平呢？",
				"a" : "过低的信誉度。SendCloud使用一系列的指标来衡量每个账户的信誉度，而您使用SendCloud发送的每一封邮件（特别是发送较多数量后），SendCloud 将得到可用的信息（包括来自于各ISP的FBL）来评估每个账户中每个mail from的邮件发送状况。如果根据这些信息（比如您发送的邮件bounce比例较高、或者被举报为有较多垃圾邮件），计算出您的信誉度过低，我们将会给您配置信誉度较差的IP。需要说明的是，除了刚刚说到的那些指标，SendCloud会从更多的维度来衡量您的信誉度，并且，信誉度计算系统会进行实时监控以保证其功能——阻止垃圾邮件的发送。"
			}
		]
	},{
		"section" : "数据追踪",
		"content" : [
			{
				"q" : "我能够使用SendCloud跟踪我的电子邮件发生了什么吗？",
				"a" : "当然可以，SendCloud可以跟踪与用户行为相关的数据：打开邮件，点击链接，弹回，取消订阅和垃圾邮件投诉等。你可以通过web页面或者API方便查看这些统计数据。"
			},{
				"q" : "硬弹回和软弹回之间有什么不同？",
				"a" : "弹回（bounce）是指各种原因造成的发件人所发出的信息不能被收件人正常接收的情况。根据邮件被退回的原因，可以分为硬弹回（hard bounce）和软弹回（soft bounce）两种不同情况。<br>硬弹回（hard bounce）是指下列任何情况之一造成的邮件无法送达：<br>• 在一个域名中并不存在这样的用户。如nobody@marketingman.net，这个地址并不存在，如果试图向这个邮箱发送邮件，将产生弹回；<br> • 域名不存在。如feng@foreb.com，曾经是我使用过的电子邮箱，后来foreb.com这个域名作废了，因此这个邮箱也就不存在了，自然无法继续接受邮件；<br>• 邮件信息被拒绝。由于邮件内容中含有某些被认为不能发送的程序或其他信息，邮件将无法被发送。<br>软弹回（soft bounce）是指下列任何情况之一造成的邮件无法送达：<br>• 由于收件方邮件服务器的原因没有形成反应。这种情形可能是暂时的，也可能会持续一段时间，这期间将形成弹回；<br>• 用户电子邮箱空间没有足够容量接收邮件。邮箱空间已满的情况下会形成弹回，如果用户对电子邮箱进行清理，删除部分邮件之后，这个邮箱还有可能正常使用。<br>一般来说，硬弹回所造成的弹回是无法改变的，而软弹回则可以采取一些办法在一定程度上得到改善，区分弹回的不同原因，目的在于采取针对性措施，尽可能提高电子邮件的送达率。"
			},{
				"q" : "是由谁来处理取消订阅的事务的？",
				"a" : "这完全取决于你。你可以选择我们提供的“取消订阅”的功能，或者使用自己的邮件模板来实现“取消订阅”的功能。相关信息请查看SendCloud用户手册。"
			},{
				"q" : "SendCloud提供分域名的数据统计么？",
				"a" : "为了方便用户多维度进行数据查看，在时间维度的基础上，我们对每日的发送情况以及投递回应，都提供分域名的数据统计维度。每个用户可查看到各自TOP 7的域名统计，如：qq.com、126.com、gmail.com等。"
			},{
				"q" : "SendCloud页面数据中的“投递回应”是指什么呢？",
				"a" : "为了让用户清楚自己的投递过程，有哪些失败，以及具体的失败原因，我们设置了此页面。主要告知用户垃圾邮件、退信邮件以及被用户取消订阅的邮件情况，具体对应垃圾列表、退信列表以及退信列表。垃圾列表中包含被用户主动举报的垃圾邮件（FBL）以及被ISP系统判定的垃圾邮件（由返回的代码确定）；退信列表中包含硬退信与软退信（具体见相关问答）；用户取消订阅则包含通过点击“不再接收此邮件”的用户地址。"
			},{
				"q" : "SendCloud图表页面中，打开、点击、独立打开、独立点击等数据分别是什么意思？",
				"a" : "相关数据说明如下： 请求：用户请求要求发送的邮件个数总和. 发送： 帮助用户成功发送的邮件个数. 打开：终端用户打开邮件的次数，即使是同一封邮件，打开几次就计算几次 弹回：软弹回的次数，例如邮箱已满造成的弹回 垃圾邮件：各种发送失败的邮件总和，包含重试次数 取消订阅：被用户点击取消订阅的总数 独立打开：终端用户独立打开邮件的次数，同一封邮件在同一天内多次打开只算作一次 独立点击：终端用户独立点击邮件的次数，同一封邮件在同一天内多次点击只算作一次 无效邮件：地址错误的邮件数目（如example@123.com就为无效地址）"
			}
		]
	}
]);