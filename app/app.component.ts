import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  vamps = [
    {
      _id: { $oid: '619ba559ccde7b04f0cbfef7' },
      __v: 0,
      adjustedBy: 'user',
      appointmentDate: '2021-11-24T02:15:00.000Z',
      brokerType: 'americanLogistics',
      client: { displayName: 'Adnan', phoneNumber: '(951) 447-3604' },
      createdAt: { $date: '2021-12-17T06:50:06.271Z' },
      dropoffAddress: {
        address: 'R. A. Bazaar, Cantt, Lahore, Punjab, Pakistan',
        coords: [74.38293879999999, 31.5032041],
      },
      isProviderTrip: 'true',
      medicaidNumber: 'kwar0p70',
      pickupAddress: {
        address:
          'Main Boulevard Gulberg, Block D1 Block D 1 Gulberg III, Lahore, Punjab 54000, Pakistan',
        coords: [74.3447647, 31.5163917],
      },
      scheduleTime: '2021-11-24T02:00:00.000Z',
      status: 'active',
      trackId: '05ZHAO',
      tripCost: '0',
      tripCreator: '615a871ec391454d14cad5d5',
      tripMileage: '20',
      tripNumber: 'kwar0p70',
      updatedAt: { $date: '2021-12-17T07:28:18.551Z' },
      vehicleType: 'LIV',
      medicalType: null,
      tripNotes: '',
    },
    {
      _id: { $oid: '619ba559ccde7b04f0cbfef5' },
      __v: 0,
      adjustedBy: 'user',
      appointmentDate: '2021-11-24T02:40:00.000Z',
      brokerType: 'americanLogistics',
      client: { displayName: 'Bilal BB', phoneNumber: '(626) 643-1198' },
      createdAt: { $date: '2021-12-17T06:50:06.314Z' },
      dropoffAddress: {
        address: 'Paf Skyview club, Bedian Rd, Cantt, Lahore, Punjab, Pakistan',
        coords: [74.40040739999999, 31.4965849],
      },
      isProviderTrip: 'true',
      medicaidNumber: 'kwar0p70',
      pickupAddress: {
        address:
          'Hafeez Centre, Block E1 Block E 1 Gulberg III, Lahore, Punjab, Pakistan',
        coords: [74.3428656, 31.5159977],
      },
      scheduleTime: '2021-11-24T02:10:00.000Z',
      status: 'active',
      trackId: '6S9WKS',
      tripCost: '0',
      tripCreator: '615a871ec391454d14cad5d5',
      tripMileage: '15',
      tripNumber: 'kwar0p70',
      updatedAt: { $date: '2021-12-17T07:29:45.789Z' },
      vehicleType: 'LIV',
      medicalType: null,
      tripNotes: '',
    },
    {
      _id: { $oid: '61bc3dfee177f2117c0b2bd6' },
      pickupAddress: {
        coords: [74.3469028, 31.5235623],
        address:
          '10، 4، F Block Main Market, لاہور, ضلع لاہور, پنجاب 54660, Pakistan',
      },
      dropoffAddress: {
        coords: [74.3666547, 31.4990017],
        address: 'Street 4, Cavalry Ground, Lahore, Punjab, Pakistan',
      },
      client: {
        firstName: 'n/a',
        lastName: 'n/a',
        displayName: 'Zain ul Tahir',
        phoneNumber: '03030043',
      },
      jobStatus: 'unAssigned',
      status: 'active',
      tripStatus: 'pending',
      isProviderTrip: 'false',
      tripNotes: '',
      medicaidNumber: 'r3r2i4',
      tripNumber: '6546578678',
      scheduleTime: '2021-11-24T01:45:06.000Z',
      appointmentDate: '2021-11-24T02:45:06.000Z',
      vehicleType: 'A',
      tripCreator: '615a871ec391454d14cad5d5',
      trackId: 'b401c00f',
      createdAt: { $date: '2021-12-17T07:36:30.234Z' },
      updatedAt: { $date: '2021-12-17T07:36:30.234Z' },
      __v: 0,
    },
  ];

  vamps2 = [];

  vamps3 = [];

  constructor(private dragulaService: DragulaService) {
    // use these if you want

    this.dragulaService.createGroup('VAMPIRES', {
      // ...
    });

    this.dragulaService.dropModel('VAMPIRES').subscribe((args) => {
      console.log(args);
    });
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true,
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
    },
  ];
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
