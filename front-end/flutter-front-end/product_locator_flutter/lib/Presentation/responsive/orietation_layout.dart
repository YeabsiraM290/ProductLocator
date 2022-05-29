import 'package:flutter/material.dart';

class OrientationLayout extends StatelessWidget {
  final Widget? landscape;
  final Widget portrait;
  const OrientationLayout({Key? key, this.landscape, required this.portrait})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    var orirntation = MediaQuery.of(context).orientation;
    if (orirntation == Orientation.landscape) {
      return landscape ?? portrait;
    }
    return portrait;
  }
}
