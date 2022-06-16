part of 'customer_profile_bloc.dart';

class CustomerProfileEditState extends Equatable {
  @override
  // TODO: implement props
  List<Object?> get props => [];
}

class CustomerProfileEditInitState extends CustomerProfileEditState {}

class CustomerProfileEditLoadingState extends CustomerProfileEditState {}

class CustomerProfileEditFetchedState extends CustomerProfileEditState {
  final String customerprofileEditlist;
  CustomerProfileEditFetchedState(this.customerprofileEditlist);
  @override
  List<Object> get props => [customerprofileEditlist];
}

class CustomerEditErrorState extends CustomerProfileEditState {
  final String message;
  CustomerEditErrorState({required this.message});
}
