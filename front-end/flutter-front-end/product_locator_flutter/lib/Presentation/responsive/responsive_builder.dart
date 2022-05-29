import 'package:product_locator_flutter/Presentation/responsive/sizing_information.dart';
import 'package:product_locator_flutter/Presentation/utils/ui_utils.dart';
// import 'package:product_locator_flutter/responsive/sizing_information.dart';
// import 'package:product_locator_flutter/utils/ui_utils.dart';
import 'package:flutter/material.dart';

class ResponsiveBuilder extends StatelessWidget {
  final Widget Function(
      BuildContext contex, SizingInformation sizingInformation) builder;
  const ResponsiveBuilder({Key? key, required this.builder}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var mediaQuery = MediaQuery.of(context);

    return LayoutBuilder(builder: (context, boxConstraints) {
      var sizingInformation = SizingInformation(
          orientation: mediaQuery.orientation,
          deviceScreenType: getDeviceType(mediaQuery),
          screenSize: mediaQuery.size,
          localWidgetSize:
              Size(boxConstraints.maxWidth, boxConstraints.maxHeight));

      return builder(context, sizingInformation);
    });
  }
}
