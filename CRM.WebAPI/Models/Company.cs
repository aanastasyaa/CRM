using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM.WebAPI.Models
{
    public class Company : Client
    {
        public string CompanyName { get; set; }
        public string PersonPosition { get; set; }
    }
}
