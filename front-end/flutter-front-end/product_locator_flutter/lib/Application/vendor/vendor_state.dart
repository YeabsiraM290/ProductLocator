part of 'vendor_bloc.dart';

class VendorState extends Equatable {
  @override
  // TODO: implement props
  List<Object?> get props => [];
}

class VendorInitState extends VendorState {}

class VendorLoadingState extends VendorState {}

class VendorFetchedState extends VendorState {
  final VendorModel vendorlist;
  VendorFetchedState(this.vendorlist);
  @override
  List<Object> get props => [vendorlist];
}

class VendorErrorState extends VendorState {
  final String message;
  VendorErrorState({required this.message});
}
