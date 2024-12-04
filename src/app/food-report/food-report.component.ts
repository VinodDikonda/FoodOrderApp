import { Component, OnInit } from '@angular/core';
import { FoodOrderService } from '../food-order.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-food-report',
  templateUrl: './food-report.component.html',
  styleUrls: ['./food-report.component.css']
})
export class FoodReportComponent implements OnInit{

  reports: any[] = [];
  employee: any = {};
  totalFine: number = 0;
  month: number | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}


  ngOnInit(): void {
    this.month = Number(this.route.snapshot.paramMap.get('month'));
    this.fetchReport(this.month);
    }

    fetchReport(month: number) {
      const url = 'http://canteen.benzyinfotech.com/api/v3/customer/report';
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZWRhNWExODU0OTFhYWE0MmY5YzMyZjRhMTU5MDM1ODk4ZjZiMzMxNWUzZjJjNGRiZDA1N2IyNGE3NTAzMDc3NDBlMjFlYjZmNGE4Mjk0MGUiLCJpYXQiOjE3MDQ4MDA4OTAuODc5OTI1OTY2MjYyODE3MzgyODEyNSwibmJmIjoxNzA0ODAwODkwLjg3OTkyOTA2NTcwNDM0NTcwMzEyNSwiZXhwIjoxNzM2NDIzMjkwLjgzNDkxMjA2MTY5MTI4NDE3OTY4NzUsInN1YiI6IjI2NSIsInNjb3BlcyI6W119.CwDEjlHoRtOXdFcaO6KGGxV202AOA7MMtJVPtKzgLqzTFzUUnDLGBd7PNAtHO2--3YOathM9HOG8hYjY8wjktXZIoCGUR9GWIaEVUxLwFq927CrSf05NuqTBTrJcDeBOjXDvKcSBiJ2A994FC2IunPcdkaZ4jpoaWBIaWueYUbHviYSQuLec3tFcAMg4njrImAlaN9k-QKkHetpdrdbUEX1Wzq4X-1QwuOx7W3W2nbbxaoNgFX1gaabxi00ZO7h5MokGvtqy_gCkS9TYoM74VfxmTyAAczjttLcPqDNiAL_ZJdutDMezw32CZj8G8l8PUL46F_BuaxatZDBUZxeClZh4_0Wvo9GX4zqF2XvHdzZHnwdB414vNCl8itaGW9w7QWbdchPOglhnek32ZmkH0MIqeOBhnAyHo5_WbP0uLd_3qmz3w04nvTbTGV25-QebaxPAsVD0-7Za1sVpqB_FD6yEeliaEzdxl_8gA5IH59uowpfPYgUIjom8NVEASuYsAwb0q3f0jhNRfwg2zmXNenoDunh_dN9l2NRjI2gdZueSMwu6IJLQK46jpn01uG2iQ1xx-pFJAGe_bzSceLsho3dbtabym3tMqi0Ac02xUP9Mn50LdkFJGNVU9jiuHQfyjQirDtGUfya3aIvpJlCGx9Cx99s_4P89uDnOiXy3A1Q'; // Replace with your actual token
  
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
  
      const body = { month: month };
  
      this.http.post<any>(url, body, { headers }).subscribe(
        (response) => {
          this.reports = response.reports;
          this.employee = response.user;
          this.calculateFine();
        },
        (error) => {
          console.error('Error fetching data', error);
        }
      );
    }
  
    calculateFine() {
      this.totalFine = this.reports.reduce((sum, report) => {
        const optIns = report.opt_ins;
        if (optIns) {
          if (optIns.breakfast === 'Pending') sum += 100;
          if (optIns.lunch === 'Pending') sum += 100;
          if (optIns.dinner === 'Pending') sum += 100;
        }
        return sum;
      }, 0);
    }
  }
  
