using CRM.WebAPI.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM.WebAPI.JsonConverters
{
    public class ClientJsonConverter : JsonCreationConverter<Client> // Лучше использовать при TPT Inheritance
    {
        protected override Client Create(Type objectType, JObject jObject)
        {
            if (jObject == null) throw new ArgumentNullException("jObject");

            if (jObject["companyName"] != null || jObject["personPosition"] != null)
            {
                return new Company();
            }
            else
            {
                return new Person();
            }
        }
    }
}
