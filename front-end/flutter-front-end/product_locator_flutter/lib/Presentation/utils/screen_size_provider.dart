import 'package:flutter/material.dart';
import 'package:product_locator_flutter/Presentation/responsive/responsive_builder.dart';

// import 'package:product_locator_flutter/responsive/responsive_builder.dart';

class ScreenSizeProvider extends StatelessWidget {
  const ScreenSizeProvider({Key? key}) : super(key: key);
  @override
  build(BuildContext context) {
    return ResponsiveBuilder(builder: (context, sizingInformation) {
      return Text(sizingInformation.toString());
    });
  }
}
